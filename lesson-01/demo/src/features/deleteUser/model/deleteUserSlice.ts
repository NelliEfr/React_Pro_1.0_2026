import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DeleteUserState {
  locallyDeletedIds: number[];
}

const initialState: DeleteUserState = {
  locallyDeletedIds: [],
};

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {
    deleteUserLocally(state, action: PayloadAction<number>) {
      state.locallyDeletedIds.push(action.payload);
    },
    resetDeleted(state) {
      state.locallyDeletedIds = [];
    },
  },
});

export const { deleteUserLocally, resetDeleted } = deleteUserSlice.actions;

export default deleteUserSlice.reducer;