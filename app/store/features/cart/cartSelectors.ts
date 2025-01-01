// app/store/feature/cart/cartSelectors.ts
import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export const selectCartItemCount = createSelector(
    selectCartItems,
    (items) => items.length
);