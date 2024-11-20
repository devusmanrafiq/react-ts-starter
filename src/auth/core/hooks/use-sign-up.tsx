import { useMutation } from 'react-query';

import { ISignUpForm } from '../_models';
import { signUp } from '../_requests';

const useSignUp = () => {
  const { mutate, isError, error, isLoading, isSuccess } = useMutation((body: ISignUpForm) => signUp(body));

  return { mutate, isError, error, isLoading, isSuccess };
};

export default useSignUp;
