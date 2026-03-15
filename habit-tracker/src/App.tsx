import React from 'react';
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AddHabitForm from './components/AddHabitForm';
import FilterBar from './components/FilterBar';
import HabitList from './components/HabitList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5c6bc0' },
    success: { main: '#43a047' },
    background: { default: '#f0f2f5' },
  },
  typography: { fontFamily: 'Inter, Roboto, sans-serif' },
  shape: { borderRadius: 10 },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        minHeight="100vh"
        sx={{ background: 'linear-gradient(135deg, #e8eaf6 0%, #e3f2fd 100%)' }}
        py={4}
      >
        <Container maxWidth="sm">
          <Box display="flex" alignItems="center" gap={1} mb={3} justifyContent="center">
            <SelfImprovementIcon color="primary" sx={{ fontSize: 36 }} />
            <Typography variant="h5" fontWeight={800} color="primary.main">
              Controle de Hábitos Diários
            </Typography>
          </Box>

          <AddHabitForm />

          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <FilterBar />
            <HabitList />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
