import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';

import { ISignInForm } from '../_models';
import { getUserByToken, login } from '../_requests';
import { useAuth } from '../auth-context';

const useSignIn = () => {
  const { saveAuth, setCurrentUser } = useAuth();

  const {
    mutate,
    isPending,
    isSuccess: isLoginSuccess,
    data: loginData,
  } = useMutation({
    mutationFn: (body: ISignInForm) => login(body),
  });

  const { mutate: verifyTokenMutate, isPending: isVerifyTokenPending } = useMutation({
    mutationFn: (token: string) => getUserByToken(token),
  });

  useEffect(() => {
    if (isLoginSuccess && loginData) {
      const apiToken = loginData?.data?.api_token;
      verifyTokenMutate(apiToken, {
        onSuccess: (res) => {
          // ✅ Save token to storage
          saveAuth({ api_token: apiToken });
          setCurrentUser(res?.data);
        },
      });
    }
  }, [isLoginSuccess, loginData, verifyTokenMutate, saveAuth, setCurrentUser]);

  return {
    loginMutate: mutate,
    isPendingLogin: isPending || isVerifyTokenPending,
  };
};

export default useSignIn;
