// import types from './types';
import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('contacts/delete');
export const addContact = createAction('contacts/add');
export const filterContact = createAction('contacts/filter');

// export const addContact = contact => {
//   return {
//     type: types.ADD,
//     payload: contact,
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: types.DELETE,
//     payload: id,
//   };
// };

// export const filterContact = name => {
//   return {
//     type: types.FILTER,
//     payload: name,
//   };
// };
