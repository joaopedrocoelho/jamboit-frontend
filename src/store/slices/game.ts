import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "@/models/game";

export interface GameRootState {
  game: Game | null;
  activeQuestionIdx: number;
}
const initialState: GameRootState = {
  game: null,
  activeQuestionIdx: 0,
};

export const activeGameSlice = createSlice({
  name: "activeGame",
  initialState: initialState,
  reducers: {
    setGame: (state, action: PayloadAction<Game>) => {
      return {
        game: {
          id: action.payload.id,
          name: action.payload.name,
          questions: action.payload.questions,
        },
        activeQuestionIdx: 0,
      };
    },
    setActiveQuestion: (state, action: PayloadAction<number>) => {
      return { ...state, activeQuestionIdx: action.payload };
    },
  },
});

export const { setGame, setActiveQuestion } = activeGameSlice.actions;
export const activeGameReducer = activeGameSlice.reducer;
export const selectGame = (state: { activeGame: GameRootState }) =>
  state.activeGame;
export const selectActiveQuestion = (state: { activeGame: GameRootState }) =>
  state.activeGame.game?.questions[state.activeGame.activeQuestionIdx];
export const selectActiveQuestionIdx = (state: { activeGame: GameRootState }) =>
  state.activeGame.activeQuestionIdx;
