import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  tasks: string[];
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state: TodoState, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state: TodoState, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
    editTask: (
      state: TodoState,
      action: PayloadAction<{ index: number; task: string }>
    ) => {
      state.tasks[action.payload.index] = action.payload.task;
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
