import { atom } from "recoil";

export const groupMembersState = atom({
    key: 'groupMembers', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });