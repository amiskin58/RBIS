import type { HitLocation } from "../types/HitLocation";

export function createHitLocation(
  x: number,
  y: number
): HitLocation {
  return {
    x,
    y,
  };
}