import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state.auth;

const authSelectors = createSelector(selectState, (state) => state);

export default authSelectors;
