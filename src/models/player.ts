export interface Player {
  id: string;
  displayName: string;
  score: number;
  answers: Record<string, string>;
  avatar?: string;
}
