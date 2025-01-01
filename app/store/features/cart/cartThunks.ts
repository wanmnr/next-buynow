// app/store/feature/cart/cartThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartItem } from '../../../types/cart';

export const fetchCartItems = createAsyncThunk(
    'cart/fetchItems',
    async (userId: string) => {
        const response = await fetch(`/api/cart/${userId}`);
        const data: CartItem[] = await response.json();
        return data;
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateItem',
    async (cartItem: CartItem) => {
        const response = await fetch(`/api/cart/item/${cartItem.id}`, {
            method: 'PUT',
            body: JSON.stringify(cartItem),
        });
        return response.json();
    }
);