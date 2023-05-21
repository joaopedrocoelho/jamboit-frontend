export interface Player {
  id: string;
  displayName: string;
  score: number;
  answers: Map<string, string>;
  avatar?: string;
}
