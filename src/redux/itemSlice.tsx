import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ItemState {
    items: string[];
} 

const initialState: ItemState = {
    items: []
}

const itemSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>)  => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1)
        },
        setItems: (state, action: PayloadAction<string[]>) => {
            state.items = action.payload
        },
        clearItems: (state) => {
            state.items = []
        }
    }
});

export const { addItem,  removeItem, setItems, clearItems} = itemSlice.actions;
export default itemSlice.reducer;