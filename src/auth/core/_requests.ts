import axios from 'axios';

import { IAuthModel, ISignInForm, ISignUpForm } from './_models';

const GET_USER_BY_ACCESS_TOKEN_URL = 'auth/verify-token';
const LOGIN_URL = 'auth/login';
const REGISTER_URL = 'auth/signup';

export function login(body: ISignInForm) {
  return axios.post<IAuthModel>(LOGIN_URL, body);
}

export function signUp(body: ISignUpForm) {
  return axios.post<IAuthModel>(REGISTER_URL, body);
}

export function getUserByToken(token: string) {
  return axios.get(GET_USER_BY_ACCESS_TOKEN_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
