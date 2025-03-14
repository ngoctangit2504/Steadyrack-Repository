import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
    isCartOpen: false,
    items: [] 
  };

// Actions
const OPEN_CART = 'OPEN_CART';
const CLOSE_CART = 'CLOSE_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        isCartOpen: true
      };
    case CLOSE_CART:
      return {
        ...state,
        isCartOpen: false
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity } 
            : item
        )
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + action.payload.quantity } 
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Calculate total items count
  const itemsCount = state.items.reduce((count, item) => count + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = state.items.reduce((total, item) => {
    let price = parseFloat(item.price.toString().replace("$", "").trim());
    if (isNaN(price)) price = 0;
    return total + (price * item.quantity);
  }, 0);
  
  // Actions
  const openCart = () => dispatch({ type: OPEN_CART });
  const closeCart = () => dispatch({ type: CLOSE_CART });
  
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ 
      type: UPDATE_QUANTITY, 
      payload: { id, quantity } 
    });
  };
  
  const removeItem = (id) => {
    dispatch({ 
      type: REMOVE_ITEM, 
      payload: { id } 
    });
  };
  
  const addItem = (item) => {
    dispatch({ 
      type: ADD_ITEM, 
      payload: item 
    });
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        isCartOpen: state.isCartOpen,
        cartItems: state.items,
        itemsCount,
        totalPrice,
        openCart,
        closeCart,
        updateQuantity,
        removeItem,
        addItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};