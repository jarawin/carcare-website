import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  login: {
    isLogin: false,
    app: '',
  },
  profile: {
    name: '',
    rank: '',
    position: '',
    userId: '',
    imageUrl: '',
  },
};

const mockUserData = {
  userId: 'ABC123',
  login: {
    isLogin: true,
    app: 'facebook',
  },
  profile: {
    name: 'Tom',
    rank: 'silver',
    position: 'manager',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state = { ...mockUserData, login: { app: action.payload.app } };
    },
    logout: (state, action) => {
      state = initialState;
    },
  },
});

// Actions creators
export const { login, logout } = userSlice.actions;

// Reducer
export default userSlice.reducer;
