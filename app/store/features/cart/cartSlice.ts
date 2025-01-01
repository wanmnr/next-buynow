// app/store/feature/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    quantity: number;
    price: number;
}

interface CartState {
    items: CartItem[];
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    items: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;