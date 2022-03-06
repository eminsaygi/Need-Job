import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  favoritesList: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const job = action.payload;
      const filtered = state.favoritesList.find(item => item.id === job.id);
      let newList = [];
      if (filtered) {
        Alert.alert('Warning', 'The job already in favorite list!');
        return state;
      } else {
        Alert.alert('Success', 'The job added favorite list successfully!');
        newList = [...state.favoritesList, job];
        return {...state, favoritesList: newList};
      }
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      const list = state.favoritesList.filter(item => item.id !== id);
      return {...state, favoritesList: list};
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
