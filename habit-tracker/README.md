# 📋 Controle de Hábitos Diários

Atividade 2 – React Redux | Laboratório de Desenvolvimento Web

## 🚀 Como rodar o projeto

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Build para produção
npm run build
```

## 🛠️ Tecnologias utilizadas

- **React 18** – biblioteca de UI
- **Redux Toolkit** – gerenciamento de estado global
- **TypeScript** – tipagem estática
- **Material UI (MUI v5)** – componentes de interface
- **Vite** – bundler e dev server

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── AddHabitForm.tsx   # Formulário para adicionar hábito
│   ├── FilterBar.tsx      # Filtros por categoria + limpar concluídos
│   ├── HabitItem.tsx      # Item individual (editar, excluir, concluir)
│   └── HabitList.tsx      # Lista de hábitos filtrada
├── store/
│   ├── index.ts           # configureStore
│   ├── habitsSlice.ts     # createSlice com todas as actions
│   ├── selectors.ts       # Selectors reutilizáveis
│   └── hooks.ts           # useAppDispatch / useAppSelector tipados
├── types/
│   └── index.ts           # Interface Habit e tipos
├── App.tsx
└── main.tsx
```

## ✅ Funcionalidades implementadas

- [x] Adicionar hábito (nome obrigatório, categoria opcional)
- [x] Editar hábito (nome e categoria)
- [x] Excluir hábito individualmente
- [x] Marcar/desmarcar como concluído (checkbox)
- [x] Filtrar por categoria (todas, saúde, estudo, lazer, outro)
- [x] Limpar todos os hábitos concluídos de uma vez
- [x] Indicação visual dos hábitos concluídos (riscado + opacidade reduzida)
- [x] Contador de hábitos concluídos

## 🗂️ Redux – Slice de hábitos

**Actions:**
- `addHabit` – adiciona novo hábito
- `editHabit` – edita nome e/ou categoria
- `deleteHabit` – remove hábito pelo id
- `toggleCompleted` – alterna concluído/pendente
- `clearCompleted` – remove todos os concluídos
- `setFilter` – define filtro de categoria ativo

**Selectors:**
- `selectAllHabits` – todos os hábitos
- `selectFilteredHabits` – hábitos filtrados pela categoria atual
- `selectFilter` – filtro ativo
- `selectCompletedCount` – quantidade de concluídos
- `selectTotalCount` – total de hábitos
