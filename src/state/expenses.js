import { atom } from "recoil";

export const expensesState = atom({
    key: 'expenses', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });