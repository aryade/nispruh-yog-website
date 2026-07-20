import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PracticeDetailClient from "./PracticeDetailClient";

const PRACTICES = [
  {
    slug: "breath-awareness",
    level: "Beginner",
    duration: "10 min",
    type: "Breath",
    title: "Conscious Breath Awareness",
    description: "The foundation of all Kriya practice. Simply sit, close the eyes and follow the natural rhythm of the breath without altering it. A quiet but profound entry point.",
    steps: ["Find a comfortable, upright seat", "Close the eyes softly", "Follow each inhale and exhale without control", "When the mind wanders, gently return"],
  },
  {
    slug: "anulom-vilom",
    level: "Beginner",
    duration: "8 min",
    type: "Breathing Exercise",
    title: "Anulom Vilom — Alternate Nostril Breathing",
    description: "A gentle alternating breath technique that balances the left and right energy channels. Calms the nervous system, clears mental blocks and prepares the mind for meditation.",
    steps: ["Sit upright with spine straight and shoulders relaxed", "Close right nostril gently with right thumb", "Inhale slowly through left nostril for 4 counts", "Close left nostril with ring finger, release right nostril", "Exhale through right nostril for 4 counts", "Inhale through right nostril for 4 counts", "Alternate for 5-10 minutes without forcing"],
  },
  {
    slug: "bhramari",
    level: "Beginner",
    duration: "5 min",
    type: "Breathing Exercise",
    title: "Bhramari — Bee Breath",
    description: "A soothing humming breath that resonates through the body, quieting scattered thoughts. Effective for anxiety, stress relief and awakening inner peace.",
    steps: ["Sit in a comfortable, upright position", "Inhale deeply through both nostrils", "On exhale, make a gentle humming sound (like a bee)", "Feel the vibration in the head, chest and body", "Keep lips sealed while humming", "Practice 5-10 rounds, focusing on the resonance"],
  },
  {
    slug: "bhastrika",
    level: "Beginner",
    duration: "3 min",
    type: "Breathing Exercise",
    title: "Bhastrika — Bellows Breath",
    description: "A powerful, rhythmic breathing technique that energizes the body and clears stagnant energy. Builds heat, increases oxygen flow and strengthens the lungs.",
    steps: ["Sit upright with spine straight", "Take a deep breath in through both nostrils", "Exhale forcefully through both nostrils like bellows", "Let the inhale happen naturally as a reaction", "Continue this forceful rhythm for 20-30 breaths", "Rest and breathe naturally, noticing the energy surge"],
  },
  {
    slug: "nadi-shodhana-beginner",
    level: "Beginner",
    duration: "7 min",
    type: "Breathing Exercise",
    title: "Nadi Shodhana — Channel Purification",
    description: "An alternate nostril breathing practice that purifies the subtle energy channels and balances left and right hemispheres of the brain. Deeply calming and clarifying.",
    steps: ["Sit with spine straight and right hand in Vishnu mudra (index and middle fingers folded)", "Close right nostril with right thumb", "Inhale through left nostril for 4 counts", "Close left nostril, open right nostril", "Exhale through right nostril for 4 counts", "Inhale through right nostril for 4 counts", "Complete 10-15 full cycles slowly and mindfully"],
  },
  {
    slug: "hatha-yoga-beginner",
    level: "Beginner",
    duration: "12 min",
    type: "Yoga",
    title: "Gentle Hatha Yoga — Beginner Asanas",
    description: "Basic yoga postures that prepare the body for pranayama and meditation. Improves flexibility, strengthens the spine and calms the nervous system.",
    steps: ["Start in Tadasana (Mountain pose) — feet together, arms at sides", "Move into Uttanasana (Forward fold) — fold from hips, letting head hang", "Step back to Chaturanga (Low plank) or knees-down variation", "Flow into Bhujangasana (Cobra pose) — chest forward, elbows bent", "Return to Downward Dog — hold for 5 breaths", "Move to Balasana (Child's pose) — rest forehead on ground", "Complete 3-5 gentle cycles at a slow, meditative pace"],
  },
  {
    slug: "kriya-adana",
    level: "Beginner",
    duration: "6 min",
    type: "Practice",
    title: "Kriya Adana — Energy Drawing",
    description: "A foundational technique that draws life force energy through the body using breath and gentle internal movements. Prepares the nervous system for deeper Kriya practices.",
    steps: ["Sit upright with spine straight and hands on thighs", "Breathe in slowly while visualizing energy rising from the base of spine", "Lift the energy to the heart center on the inhale", "Hold the breath briefly, feeling the energy settle", "Exhale slowly while visualizing energy returning downward", "Repeat 10-15 times, synchronizing breath with internal movement", "Rest and feel the subtle energy circulation in your body"],
  },
  {
    slug: "mantra-chanting",
    level: "Beginner",
    duration: "10 min",
    type: "Mantra",
    title: "Mantra Chanting — Sacred Sound Meditation",
    description: "Repetition of sacred mantras that attune the mind to higher frequencies. Builds concentration, purifies thought patterns and connects to spiritual tradition.",
    steps: ["Sit in a comfortable, upright position", "Choose a mantra: 'Om', 'So Hum', or 'Om Namah Shivaya'", "Begin chanting aloud slowly, feeling the vibration in the body", "Let your voice find a natural rhythm and pitch", "Continue for 5-10 minutes, gradually internalizing the sound", "End with 3 deep breaths and observe the inner silence", "Feel the lingering vibration and peace in your being"],
  },
  {
    slug: "body-scan",
    level: "Beginner",
    duration: "15 min",
    type: "Meditation",
    title: "Body Scan and Inner Stillness",
    description: "A guided movement of awareness through the body from feet to crown — releasing held tension and preparing the ground for deeper sitting practice.",
    steps: ["Lie flat or sit upright", "Bring awareness slowly to each part of the body", "Observe sensation without commentary", "Rest in the stillness that follows"],
  },
  {
    slug: "morning-intention",
    level: "Beginner",
    duration: "5 min",
    type: "Daily Ritual",
    title: "Morning Intention Setting",
    description: "Before the day takes hold — three breaths, one intention. A micro-practice that anchors the mind in quiet purpose before the world calls.",
    steps: ["Sit before reaching for any device", "Take three long, slow breaths", "Ask inwardly: what quality do I wish to carry today?", "Let the answer arise without forcing"],
  },
  {
    slug: "nadi-shodhana",
    level: "Intermediate",
    duration: "20 min",
    type: "Pranayama",
    title: "Nadi Shodhana — Alternate Nostril Breathing",
    description: "A classical pranayama that balances the solar and lunar channels of the subtle body. Deeply calming and clarifying — the gateway to more advanced Kriya techniques.",
    steps: ["Sit with the spine straight", "Use the right hand in Vishnu mudra", "Inhale left, exhale right — then reverse", "Complete 9 to 18 full rounds"],
  },
  {
    slug: "trataka",
    level: "Intermediate",
    duration: "25 min",
    type: "Meditation",
    title: "Trataka — Steady Gazing",
    description: "Fixing the gaze on a single point — traditionally a flame — until the eyes water and the mind narrows to a single thread. An ancient concentration practice.",
    steps: ["Place a candle at eye level, arm's length away", "Gaze at the flame without blinking as long as comfortable", "Close the eyes and hold the after-image in the mind's eye", "Repeat three times, then sit in silence"],
  },
  {
    slug: "hansa",
    level: "Intermediate",
    duration: "30 min",
    type: "Mantra",
    title: "HanSa Mantra Meditation",
    description: "The reverse breath sound: Ha on the exhale, Sa on the inhale. This advanced practice draws energy downward and inward, deepening meditation and awakening inner wisdom.",
    steps: ["Sit in a steady, upright posture with spine straight", "Breathe naturally and inwardly hear 'Ha' on each exhale, feeling energy descend", "Hear 'Sa' on each inhale, feeling energy rise subtly", "Synchronize the mantra with the natural breath rhythm", "Gradually deepen the internalization of the sound", "Continue for 25–30 minutes, allowing the meditation to become effortless"],
  },
  {
    slug: "spinal-breath",
    level: "Advanced",
    duration: "45 min",
    type: "Kriya",
    title: "Spinal Breath — The First Kriya",
    description: "The foundational Kriya technique: a precise movement of breath and awareness up and down the spine through the six centres (chakras). Traditionally received in person from a qualified teacher.",
    steps: ["Received through initiation — not self-taught", "Practised after basic pranayama is stable", "Done in silent, early morning conditions", "Combined with mahamudra and meditation"],
  },
  {
    slug: "mahamudra",
    level: "Advanced",
    duration: "60 min",
    type: "Kriya",
    title: "Mahamudra — The Great Gesture",
    description: "A powerful preparatory practice combining physical posture, breath retention and inner focus. It awakens the energy of the spine before the Kriyas proper.",
    steps: ["Traditionally practised before the Kriyas", "Involves forward fold with specific mudra and kumbhaka", "Held for measured counts on each side", "Detailed instruction given by the teacher"],
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const practice = PRACTICES.find(p => p.slug === params.slug);
  if (!practice) {
    return {
      title: "Not Found",
    };
  }
  return {
    title: practice.title,
    description: practice.description,
  };
}

export function generateStaticParams() {
  return PRACTICES.map(practice => ({
    slug: practice.slug,
  }));
}

export default function PracticeDetailPage({ params }: { params: { slug: string } }) {
  const practice = PRACTICES.find(p => p.slug === params.slug);

  if (!practice) {
    notFound();
  }

  return <PracticeDetailClient practice={practice} />;
}
