"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  name: string;
  lat: number;
  lng: number;
  phone: string;
  country: string;
}

const LOCATIONS: Location[] = [
  { name: "Nashik", lat: 19.9975, lng: 73.7898, phone: "+919975631901", country: "India" },
  { name: "Jyväskylä", lat: 62.2329, lng: 25.7482, phone: "+358 46 571 0507", country: "Finland" },
  { name: "Tampere", lat: 61.4978, lng: 23.7609, phone: "+358 46 524 2629", country: "Finland" },
  { name: "Helsinki/Espoo", lat: 60.2054, lng: 24.6519, phone: "+358 46 571 0507", country: "Finland" },
];

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map centered on world view (slight offset towards Europe/India)
    const map = L.map(mapRef.current, {
      center: [35, 50],
      zoom: 3,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom pista green icon
    const pistaIcon = L.icon({
      iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40'%3E%3Cpath d='M16 2a10 10 0 0 1 10 10c0 7-10 18-10 18S6 19 6 12a10 10 0 0 1 10-10z' fill='%2393C572'/%3E%3Ccircle cx='16' cy='12' r='4' fill='white'/%3E%3C/svg%3E",
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
    });

    // Add markers for each location
    LOCATIONS.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], { icon: pistaIcon })
        .bindPopup(
          `<div style="padding: 8px; min-width: 200px;">
            <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #1f2a44;">
              ${location.name}, ${location.country}
            </p>
            <a href="tel:${location.phone.replace(/\s/g, "")}"
               style="color: #93C572; text-decoration: none; font-size: 13px; font-weight: 500;">
              ${location.phone}
            </a>
          </div>`,
          { maxWidth: 250 }
        )
        .addTo(map);

      // Auto-open first popup
      if (location.name === "Nashik") {
        marker.openPopup();
      }
    });

    mapInstanceRef.current = map;

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%", borderRadius: "1rem", zIndex: 1 }} />
  );
}
