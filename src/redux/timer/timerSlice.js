import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roundTime: 0,
  trueTime: 0,
  countTime: 0,
  timerId: undefined,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.roundTime = action.payload.roundTime;
      state.trueTime = action.payload.trueTime;
      state.countTime = 0;
    },
    clearTimer: (state) => {
      return initialState;
    },
    tick: (state) => {
      state.countTime = state.countTime + 100;
    },
    setTimerId: (state, action) => {
      state.timerId = action.payload;
    },
    setTurn: (state, action) => {
      state.roundTime = action.payload.roundTime;
      state.trueTime = action.payload.turnTime;
      state.countTime = 0;
    },
    clearCountTime: (state) => {
      state.countTime = 0;
    },
  },
});

export const {
  setTimer,
  clearTimer,
  tick,
  setTimerId,
  setTurn,
  clearCountTime,
} = timerSlice.actions;

//state를 간단히 가져오기 위해 사용
export const selectTimer = (state) => state.timer;
export const selecTimerId = (state) => state.timer.timerId;

export default timerSlice.reducer;
