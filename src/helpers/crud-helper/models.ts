export type Role = 'USER' | 'ADMIN';

export type ID = string;

export type Response<T> = {
  data?: T;
};
