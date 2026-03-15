import React from 'react';
import { Box, Typography } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { useAppSelector } from '../store/hooks';
import { selectFilteredHabits } from '../store/selectors';
import HabitItem from './HabitItem';

const HabitList: React.FC = () => {
  const habits = useAppSelector(selectFilteredHabits);

  if (habits.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={6}
        color="text.secondary"
        gap={1}
      >
        <ChecklistIcon sx={{ fontSize: 48, opacity: 0.4 }} />
        <Typography variant="body1" color="text.secondary">
          Nenhum hábito encontrado. Adicione um acima!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </Box>
  );
};

export default HabitList;
