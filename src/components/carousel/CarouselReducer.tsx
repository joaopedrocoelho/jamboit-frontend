import { Reducer} from "react";

export interface CarouselState {
    trend: 'increasing' | 'decreasing' | 'none',
    active: number
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
    active: 0
  }

  export type CarouselReducer = Reducer<CarouselState,CarouselAction>;

export const carouselReducer:CarouselReducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
     case "next":
        console.log('next', state)
        return {
          trend: 'increasing',
          active: state.active + 1
        };
      case "prev":
        console.log('prev', state)
        return {
          trend: 'decreasing',
          active: state.active - 1
        };
      default:
        return state;
    }
  }
 