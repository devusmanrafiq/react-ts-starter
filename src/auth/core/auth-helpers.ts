import axios from 'axios';

import { IAuthModel } from './_models';

const AUTH_LOCAL_STORAGE_KEY = import.meta.env.VITE_AUTH_LOCAL_STORAGE_KEY as string;

const getAuth = (): IAuthModel | undefined => {
  if (!localStorage) {
    return;
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  if (!lsValue) {
    return;
  }

  try {
    const auth: IAuthModel = JSON.parse(lsValue) as IAuthModel;
    if (auth) {
      // You can easily check auth_token expiration also
      // eslint-disable-next-line consistent-return
      return auth;
    }
  } catch (error) {
    // console.error('AUTH LOCAL STORAGE PARSE ERROR', error);
  }
};

const setAuth = (auth: IAuthModel) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = JSON.stringify(auth);
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue);
  } catch (error) {
    // console.error('AUTH LOCAL STORAGE SAVE ERROR', error);
  }
};

const removeAuth = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
  } catch (error) {
    // console.error('AUTH LOCAL STORAGE REMOVE ERROR', error);
  }
};

export function setupAxios() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

  axios.interceptors.request.use((config) => {
    const changedConfig = config;

    const token = getAuth()?.api_token;
    if (token && config.headers) {
      changedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return changedConfig;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const isUnAuthorized = Boolean(error?.response?.status === 403) || Boolean(error?.response?.status === 401);
      if (isUnAuthorized) removeAuth();

      return Promise.reject(error);
    }
  );
}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY };
