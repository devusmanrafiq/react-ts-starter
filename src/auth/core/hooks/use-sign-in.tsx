import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { ISignInForm } from '../_models';
import { getUserByToken, login } from '../_requests';
import { useAuth } from '../auth-context';

const useSignIn = () => {
  const { saveAuth, setCurrentUser } = useAuth();

  const { mutate, isError, error, isLoading, isSuccess, data } = useMutation((body: ISignInForm) => login(body));
  const { mutate: mutateVerifyToken, isLoading: isLoadingVerifyToken } = useMutation((token: string) =>
    getUserByToken(token)
  );

  useEffect(() => {
    if (isSuccess && data) {
      mutateVerifyToken(data?.data?.api_token, {
        onSuccess: (res) => {
          // ✅ Save token to storage
          saveAuth({
            api_token: data?.data?.api_token,
          });
          setCurrentUser(res?.data);
        },
      });
    }
  }, [data, isSuccess, mutateVerifyToken, saveAuth, setCurrentUser]);

  return { mutate, isError, error, isLoading, isLoadingVerifyToken };
};

export default useSignIn;
