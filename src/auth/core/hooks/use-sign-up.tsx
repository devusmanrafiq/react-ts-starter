import { useMutation } from '@tanstack/react-query';

import { ISignUpForm } from '../_models';
import { signUp } from '../_requests';

const useSignUp = () => {
  const { mutate, isError, error, isPending, isSuccess } = useMutation({
    mutationFn: (body: ISignUpForm) => signUp(body),
  });

  return { mutate, isError, error, isPending, isSuccess };
};

export default useSignUp;
