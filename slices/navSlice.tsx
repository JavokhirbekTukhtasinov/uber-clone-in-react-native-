import {createSlice} from '@reduxjs/toolkit';
import React from 'react';
const initialState = {
  origin: 'origin',
  destination: null,
  travelTimeInfo: null,
};
export const navSlice = createSlice({
  name: 'navSlice',
  initialState: initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

// selectors

export const selectOrigin = (state: any) => state.navSlice.origin;
export const selectDestination = (state: any) => state.navSlice.destination;
export const selectTravelTimeInfo = (state: any) =>
  state.navSlice.travelTimeInfo;
