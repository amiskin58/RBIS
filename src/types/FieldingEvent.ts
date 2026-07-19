import type { HitLocation } from "./HitLocation";
import type { HitType } from "./HitType";
import type { HitResult } from "./HitResult";
import type { DefensivePosition } from "./DefensivePosition";

export interface FieldingEvent {
  location: HitLocation;
  hitType: HitType;
  fielder: DefensivePosition;
  result: HitResult;
}