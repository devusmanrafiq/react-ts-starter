export type Role = 'USER' | 'ADMIN';

export type ID = string;

export type Response<T> = {
  data?: T;
};

export interface ITimeStamps {
  createdAt?: string;
  updatedAt?: string;
}
