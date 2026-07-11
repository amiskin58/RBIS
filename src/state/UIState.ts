export type HitType =
  | "1B"
  | "2B"
  | "3B"
  | "HR"
  | null;

export interface UIState {
  selectingHitLocation: boolean;

  hitType: HitType;
}

export const initialUIState: UIState = {
  selectingHitLocation: false,

  hitType: null,
};