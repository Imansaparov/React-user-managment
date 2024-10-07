import {UserType} from "@/shared/types";

export const saveUsersToLocalStorage = (users: UserType[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const loadUsersFromLocalStorage = (): UserType[] => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};