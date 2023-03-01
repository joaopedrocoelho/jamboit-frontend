import { Reducer} from "react";

export interface CarouselState {
    trend: 'increasing' | 'decreasing' | 'none',
    active: number,
    previous: number
  };

  export enum CarouselActionKind {
    JUMP = "jump",
    NEXT = "next",
    PREV = "prev"
    
  }

  export interface CarouselAction {
    type: CarouselActionKind;
    payload: number;
  }
  
  export const initialState:CarouselState = {
    trend: 'none',
    active: 0,
    previous: 0
  }

  export type CarouselReducer = Reducer<CarouselState,CarouselAction>;

export const carouselReducer:CarouselReducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
     case "next":
        return {
          trend: 'increasing',
          active: state.active + 1,
          previous: state.active
        };
      case "prev":
        return {
          trend: 'decreasing',
          active: state.active - 1,
          previous: state.active
        };
      case "jump":
        return {
            trend: state.active > payload ? 'decreasing' : 'increasing',
            active: payload,
            previous: state.active
        }
      default:
        return state;
    }
  }
 