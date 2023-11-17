import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (value) => value.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((value) => value.pizzaId === action.payload);
      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (value) => value.pizzaId !== item.pizzaId,
        );
      } else {
        state.cart = state.cart.map((value) => {
          if (value.pizzaId === item.pizzaId) {
            return { ...value, quantity: value.quantity - 1 };
          }
          return item;
        });
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const gerCartTotalQuantity = (state) => {
  return state.cart.cart.reduce((acc, curr) => {
    acc = acc + curr.quantity;
    return acc;
  }, 0);
};

export const getCurrentQuantityById = (state, id) => {
  const item = state.cart.cart.find((value) => value.pizzaId === id);
  return item ? item?.quantity : 0;
};

export const getCartTotalPrice = (state) => {
  return state.cart.cart.reduce((acc, curr) => {
    acc = acc + curr.quantity * curr.unitPrice;
    return acc;
  }, 0);
};
