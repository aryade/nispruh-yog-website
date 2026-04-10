import { describe, it, expect } from "vitest";
import {
  DURATIONS,
  STAGGER,
  DELAYS,
  EASE,
  fadeUp,
  fadeIn,
  scaleUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  pageEnter,
  pulse,
  scalePulse,
} from "./animations";

describe("Animations Configuration", () => {
  describe("DURATIONS", () => {
    it("exports duration constants", () => {
      expect(DURATIONS.micro).toBe(0.25);
      expect(DURATIONS.quick).toBe(0.35);
      expect(DURATIONS.standard).toBe(0.85);
      expect(DURATIONS.emphasis).toBe(1.1);
      expect(DURATIONS.slow).toBe(1.4);
      expect(DURATIONS.verySlow).toBe(3.2);
    });
  });

  describe("STAGGER", () => {
    it("exports stagger constants", () => {
      expect(STAGGER.tight).toBe(0.08);
      expect(STAGGER.normal).toBe(0.18);
      expect(STAGGER.generous).toBe(0.25);
    });
  });

  describe("DELAYS", () => {
    it("exports delay constants", () => {
      expect(DELAYS.none).toBe(0);
      expect(DELAYS.fast).toBe(0.1);
      expect(DELAYS.normal).toBe(0.15);
      expect(DELAYS.slow).toBe(0.25);
      expect(DELAYS.emphasis).toBe(0.35);
    });
  });

  describe("EASE", () => {
    it("exports easing curves", () => {
      expect(EASE.out).toEqual([0.22, 1, 0.36, 1]);
      expect(EASE.in).toEqual([0.22, 1, 0.36, 1]);
      expect(EASE.inOut).toEqual([0.43, 0.13, 0.23, 0.96]);
    });
  });

  describe("fadeUp variant generator", () => {
    it("creates correct hidden state", () => {
      const variant = fadeUp();
      expect(variant.hidden).toEqual({ opacity: 0, y: 20 });
    });

    it("creates correct show state", () => {
      const variant = fadeUp();
      expect(variant.show?.opacity).toBe(1);
      expect(variant.show?.y).toBe(0);
    });

    it("uses default duration and delay", () => {
      const variant = fadeUp();
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.standard);
      expect(transition.delay).toBe(DELAYS.none);
      expect(transition.ease).toEqual(EASE.out);
    });

    it("accepts custom duration and delay", () => {
      const variant = fadeUp(DURATIONS.slow, DELAYS.fast);
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.slow);
      expect(transition.delay).toBe(DELAYS.fast);
    });
  });

  describe("fadeIn variant generator", () => {
    it("creates correct hidden and show states", () => {
      const variant = fadeIn();
      expect(variant.hidden).toEqual({ opacity: 0 });
      expect(variant.show?.opacity).toBe(1);
    });

    it("accepts custom duration and delay", () => {
      const variant = fadeIn(DURATIONS.emphasis, DELAYS.slow);
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.emphasis);
      expect(transition.delay).toBe(DELAYS.slow);
    });
  });

  describe("scaleUp variant generator", () => {
    it("creates correct hidden state with scale and opacity", () => {
      const variant = scaleUp();
      expect(variant.hidden).toEqual({ opacity: 0, scale: 0.95 });
    });

    it("creates correct show state", () => {
      const variant = scaleUp();
      expect(variant.show?.opacity).toBe(1);
      expect(variant.show?.scale).toBe(1);
    });

    it("uses emphasis duration by default", () => {
      const variant = scaleUp();
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.emphasis);
    });

    it("accepts custom duration and delay", () => {
      const variant = scaleUp(DURATIONS.slow, DELAYS.normal);
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.slow);
      expect(transition.delay).toBe(DELAYS.normal);
    });
  });

  describe("slideInLeft variant generator", () => {
    it("creates correct hidden state", () => {
      const variant = slideInLeft();
      expect(variant.hidden).toEqual({ opacity: 0, x: -24 });
    });

    it("creates correct show state", () => {
      const variant = slideInLeft();
      expect(variant.show?.opacity).toBe(1);
      expect(variant.show?.x).toBe(0);
    });

    it("accepts custom duration and delay", () => {
      const variant = slideInLeft(DURATIONS.emphasis, DELAYS.fast);
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.emphasis);
      expect(transition.delay).toBe(DELAYS.fast);
    });
  });

  describe("slideInRight variant generator", () => {
    it("creates correct hidden state", () => {
      const variant = slideInRight();
      expect(variant.hidden).toEqual({ opacity: 0, x: 24 });
    });

    it("creates correct show state", () => {
      const variant = slideInRight();
      expect(variant.show?.opacity).toBe(1);
      expect(variant.show?.x).toBe(0);
    });

    it("accepts custom duration and delay", () => {
      const variant = slideInRight(DURATIONS.slow, DELAYS.emphasis);
      const transition = variant.show?.transition as any;
      expect(transition.duration).toBe(DURATIONS.slow);
      expect(transition.delay).toBe(DELAYS.emphasis);
    });
  });

  describe("staggerContainer variant generator", () => {
    it("creates container with stagger transition", () => {
      const variant = staggerContainer();
      const transition = variant.show?.transition as any;
      expect(transition.staggerChildren).toBe(STAGGER.normal);
      expect(transition.delayChildren).toBe(DELAYS.none);
    });

    it("accepts custom stagger and delay", () => {
      const variant = staggerContainer(STAGGER.generous, DELAYS.slow);
      const transition = variant.show?.transition as any;
      expect(transition.staggerChildren).toBe(STAGGER.generous);
      expect(transition.delayChildren).toBe(DELAYS.slow);
    });

    it("has empty hidden state", () => {
      const variant = staggerContainer();
      expect(variant.hidden).toEqual({});
    });
  });

  describe("pageEnter variant", () => {
    it("has hidden, enter, and exit states", () => {
      expect(pageEnter.hidden).toBeDefined();
      expect(pageEnter.enter).toBeDefined();
      expect(pageEnter.exit).toBeDefined();
    });

    it("has correct hidden state", () => {
      expect(pageEnter.hidden).toEqual({ opacity: 0, y: 16 });
    });

    it("has correct enter state", () => {
      expect(pageEnter.enter?.opacity).toBe(1);
      expect(pageEnter.enter?.y).toBe(0);
    });

    it("has correct exit state", () => {
      expect(pageEnter.exit?.opacity).toBe(0);
      expect(pageEnter.exit?.y).toBe(-12);
    });

    it("uses slow duration for enter", () => {
      const transition = pageEnter.enter?.transition as any;
      expect(transition.duration).toBe(DURATIONS.slow);
    });

    it("uses quick duration for exit", () => {
      const transition = pageEnter.exit?.transition as any;
      expect(transition.duration).toBe(DURATIONS.quick);
    });
  });

  describe("pulse variant generator", () => {
    it("creates infinite opacity animation", () => {
      const variant = pulse();
      expect(variant.animate).toBeDefined();
    });

    it("has correct opacity keyframes", () => {
      const variant = pulse();
      expect(variant.animate?.opacity).toEqual([0.5, 0.8, 0.5]);
    });

    it("uses very slow duration", () => {
      const variant = pulse();
      const transition = variant.animate?.transition as any;
      expect(transition.duration).toBe(DURATIONS.verySlow);
      expect(transition.repeat).toBe(Infinity);
    });
  });

  describe("scalePulse variant generator", () => {
    it("creates infinite scale animation", () => {
      const variant = scalePulse();
      expect(variant.animate).toBeDefined();
    });

    it("has correct scale keyframes", () => {
      const variant = scalePulse();
      expect(variant.animate?.scale).toEqual([1, 1.02, 1]);
    });

    it("uses very slow duration", () => {
      const variant = scalePulse();
      const transition = variant.animate?.transition as any;
      expect(transition.duration).toBe(DURATIONS.verySlow);
      expect(transition.repeat).toBe(Infinity);
    });
  });
});
