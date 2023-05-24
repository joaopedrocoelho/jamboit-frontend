import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "@/models/game";
import { Player } from "@/models/player";

export interface PlayersRootState {
  players: Player[];
}
const initialState: PlayersRootState = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState: initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      return {
        ...state,
        players: action.payload,
      };
    },
    updateScore: (
      state,
      action: PayloadAction<{ id: string; score: number }>
    ) => {
      const player = state.players.find((p) => p.id === action.payload.id);
      if (player) {
        player.score += action.payload.score;
      }
      return state;
    },
    // setActivePlayer: (state) => {
    //   console.log("setActivePlayer", state);
    //   return {
    //     ...state,
    //     activePlayer: (state.activePlayerIdx + 1) % state.players.length,
    //   };
    // },
  },
  // extraReducers: {
  //   "players/updateScore": (
  //     state,
  //     action: PayloadAction<{ id: string; score: number }>
  //   ) => {
  //     console.log("setActivePlayer", state, action);
  //     return {
  //       ...state,
  //       activePlayer: (state.activePlayerIdx + 1) % state.players.length,
  //     };
  //   },
  //},
});

export const { setPlayers, updateScore } = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
export const selectPlayers = (state: { players: PlayersRootState }) =>
  state.players;
