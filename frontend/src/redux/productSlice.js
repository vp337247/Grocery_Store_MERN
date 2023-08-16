import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [], // Holds the list of products
  cartItem: [],   // Holds the items added to the cart
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Sets the product list data in the store
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    // Adds an item to the cart
    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);

      if (check) {
        toast("Item Already in the Cart");
      } else {
        toast("Item Added successfully");

        // Calculate total price based on quantity and price of the item
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },

    // Deletes an item from the cart
    deleteCartItem: (state, action) => {
      toast("Item Deleted");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
    },

    // Increases the quantity of an item in the cart
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;

      // Calculate new total based on the updated quantity
      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].qty = qtyInc;
      state.cartItem[index].total = total;
    },

    // Decreases the quantity of an item in the cart
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;

      if (qty > 1) {
        const qtyDec = --qty;

        // Calculate new total based on the updated quantity
        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].qty = qtyDec;
        state.cartItem[index].total = total;
      }
    },
  },
});

// Export the actions for use in components
export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

// Export the reducer function
export default productSlice.reducer;
