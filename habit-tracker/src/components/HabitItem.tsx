import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Chip,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Paper,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Habit } from '../types';
import { useAppDispatch } from '../store/hooks';
import { deleteHabit, editHabit, toggleCompleted } from '../store/habitsSlice';

const CATEGORIES = ['saúde', 'estudo', 'lazer', 'outro'];

const CATEGORY_COLORS: Record<string, 'success' | 'primary' | 'warning' | 'default'> = {
  saúde: 'success',
  estudo: 'primary',
  lazer: 'warning',
  outro: 'default',
};

interface Props {
  habit: Habit;
}

const HabitItem: React.FC<Props> = ({ habit }) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);
  const [editCategory, setEditCategory] = useState(habit.category);

  const handleSave = () => {
    if (!editName.trim()) return;
    dispatch(editHabit({ id: habit.id, name: editName.trim(), category: editCategory }));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditName(habit.name);
    setEditCategory(habit.category);
    setEditing(false);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 1.5,
        mb: 1.5,
        borderRadius: 2,
        opacity: habit.completed ? 0.65 : 1,
        borderLeft: `4px solid`,
        borderLeftColor: habit.completed ? 'success.main' : 'primary.main',
        transition: 'all 0.2s',
        flexWrap: 'wrap',
      }}
    >
      <Tooltip title={habit.completed ? 'Desmarcar' : 'Marcar como concluído'}>
        <Checkbox
          checked={habit.completed}
          onChange={() => dispatch(toggleCompleted(habit.id))}
          color="success"
          size="small"
        />
      </Tooltip>

      {editing ? (
        <Box display="flex" gap={1} alignItems="center" flexWrap="wrap" flexGrow={1}>
          <TextField
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            size="small"
            sx={{ flexGrow: 1, minWidth: 150 }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
          />
          <Select
            value={editCategory}
            onChange={(e: SelectChangeEvent) => setEditCategory(e.target.value)}
            size="small"
            sx={{ minWidth: 130 }}
          >
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
          <Tooltip title="Salvar">
            <IconButton size="small" color="success" onClick={handleSave}>
              <CheckIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar">
            <IconButton size="small" color="error" onClick={handleCancel}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" gap={1} flexGrow={1} flexWrap="wrap">
          <Typography
            flexGrow={1}
            sx={{
              textDecoration: habit.completed ? 'line-through' : 'none',
              color: habit.completed ? 'text.secondary' : 'text.primary',
              fontWeight: 500,
            }}
          >
            {habit.name}
          </Typography>
          <Chip
            label={habit.category.charAt(0).toUpperCase() + habit.category.slice(1)}
            color={CATEGORY_COLORS[habit.category] ?? 'default'}
            size="small"
            variant="outlined"
          />
          <Tooltip title="Editar">
            <IconButton size="small" onClick={() => setEditing(true)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Excluir">
            <IconButton size="small" color="error" onClick={() => dispatch(deleteHabit(habit.id))}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Paper>
  );
};

export default HabitItem;
