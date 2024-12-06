import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ItemState {
  items: string[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, setItems, clearItems } = itemSlice.actions;
export default itemSlice.reducer;

// Ação assíncrona para carregar os itens do AsyncStorage
export const loadItems = () => async (dispatch: any) => {
  try {
    const storedItems = await AsyncStorage.getItem('items');
    if (storedItems) {
      dispatch(setItems(JSON.parse(storedItems)));
    }
  } catch (error) {
    console.error('Erro ao carregar itens:', error);
  }
};

// Ação assíncrona para salvar os itens no AsyncStorage
export const saveItems = () => async (dispatch: any, getState: any) => {
  try {
    const items = getState().data.items;
    await AsyncStorage.setItem('items', JSON.stringify(items));
  } catch (error) {
    console.error('Erro ao salvar itens:', error);
  }
};
