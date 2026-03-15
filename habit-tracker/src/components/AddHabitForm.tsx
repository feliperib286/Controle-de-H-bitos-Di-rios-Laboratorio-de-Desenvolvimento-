import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Paper,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAppDispatch } from '../store/hooks';
import { addHabit } from '../store/habitsSlice';

const CATEGORIES = ['saúde', 'estudo', 'lazer', 'outro'];

const AddHabitForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('outro');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('O nome do hábito é obrigatório.');
      return;
    }
    dispatch(addHabit({ name: name.trim(), category }));
    setName('');
    setCategory('outro');
    setError('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Adicionar Novo Hábito
      </Typography>
      <Box display="flex" gap={2} flexWrap="wrap" alignItems="flex-start">
        <TextField
          label="Nome do hábito"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError('');
          }}
          error={!!error}
          helperText={error}
          size="small"
          sx={{ flexGrow: 1, minWidth: 200 }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Categoria</InputLabel>
          <Select
            value={category}
            label="Categoria"
            onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleSubmit}
          sx={{ height: 40, alignSelf: 'flex-start' }}
        >
          Adicionar
        </Button>
      </Box>
    </Paper>
  );
};

export default AddHabitForm;
