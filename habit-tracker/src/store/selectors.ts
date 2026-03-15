import { RootState } from './index';

export const selectAllHabits = (state: RootState) => state.habits.habits;

export const selectFilter = (state: RootState) => state.habits.filter;

export const selectFilteredHabits = (state: RootState) => {
  const { habits, filter } = state.habits;
  if (filter === 'todas') return habits;
  return habits.filter((h) => h.category === filter);
};

export const selectCompletedCount = (state: RootState) =>
  state.habits.habits.filter((h) => h.completed).length;

export const selectTotalCount = (state: RootState) =>
  state.habits.habits.length;
