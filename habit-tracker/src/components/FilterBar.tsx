import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Typography,
} from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearCompleted, setFilter } from '../store/habitsSlice';
import {
  selectFilter,
  selectCompletedCount,
  selectTotalCount,
} from '../store/selectors';

const FILTERS = ['todas', 'saúde', 'estudo', 'lazer', 'outro'];

const FilterBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectFilter);
  const completedCount = useAppSelector(selectCompletedCount);
  const totalCount = useAppSelector(selectTotalCount);

  return (
    <Box mb={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={1}
        mb={1.5}
      >
        <Typography variant="body2" color="text.secondary">
          {completedCount} de {totalCount} hábito(s) concluído(s)
        </Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteSweepIcon />}
          onClick={() => dispatch(clearCompleted())}
          disabled={completedCount === 0}
        >
          Limpar Concluídos
        </Button>
      </Box>

      <Divider sx={{ mb: 1.5 }} />

      <ButtonGroup variant="outlined" size="small" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
        {FILTERS.map((f) => (
          <Button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            variant={currentFilter === f ? 'contained' : 'outlined'}
            sx={{ textTransform: 'capitalize' }}
          >
            {f}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default FilterBar;
