import { createSlice } from "@reduxjs/toolkit";
import {
  POMODORO,
  LONG_BREAK,
  SHORT_BREAK,
  SLOW_TICKING,
  DIGITAL_SOUND,
  NO_SOUND,
  D1,D2,D3,D4,D5
} from "../constants";

const initialState = {
  mode: POMODORO,
  round: 1,
  autoBreaks: false,
  autoPomodoros: false,
  longBreakInterval: 4,
  alarmSound: D1,
  alarmVolume: 50,
  alarmRepeat: 1,
  tickingSound: NO_SOUND,
  tickingVolume: 50,
  modes: {
    [POMODORO]: {
      id: POMODORO,
      label: "Binhodoro",
      time: 25,
    },
    [SHORT_BREAK]: {
      id: SHORT_BREAK,
      label: "Short Break",
      time: 5,
    },
    [LONG_BREAK]: {
      id: LONG_BREAK,
      label: "Long Break",
      time: 15,
    },
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    incrementRound: (state) => {
      state.round += 1;
    },
    updateModeTime: (state, action) => {
      const { mode, time } = action.payload;
      state.modes[mode].time = time;
    },
    toggleAutoBreaks: (state) => {
      state.autoBreaks = !state.autoBreaks;
    },
    toggleAutoPomodoros: (state) => {
      state.autoPomodoros = !state.autoPomodoros;
    },
    setLongBreakInterval: (state, action) => {
      state.longBreakInterval = action.payload;
    },
    setAlarmSound: (state, action) => {
      state.alarmSound = action.payload;
    },
    setAlarmVolume: (state, action) => {
      state.alarmVolume = action.payload;
    },
    setAlarmRepeat: (state, action) => {
      state.alarmRepeat = action.payload;
    },
    setTickingSound: (state, action) => {
      state.tickingSound = action.payload;
    },
    setTickingVolume: (state, action) => {
      state.tickingVolume = action.payload;
    },
  },
});

export const {
  setMode,
  incrementRound,
  updateModeTime,
  toggleAutoBreaks,
  toggleAutoPomodoros,
  setLongBreakInterval,
  setAlarmSound,
  setAlarmVolume,
  setAlarmRepeat,
  setTickingSound,
  setTickingVolume,
} = timerSlice.actions;

export default timerSlice.reducer;
