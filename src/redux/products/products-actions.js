import { createAction, nanoid } from '@reduxjs/toolkit';

const addProduct = createAction('products/addProduct', product => ({
  payload: {
    ...product,
    id: nanoid(),
  },
}));

const deleteProduct = createAction('products/deleteProduct');

export { addProduct, deleteProduct };
