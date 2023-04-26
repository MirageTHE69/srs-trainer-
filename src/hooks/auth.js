import { useQuery, useQueryClient, useMutation } from 'react-query';

import { getUser, login } from "../service/auth";

import { getMe, updateMe, loginUser, signupUser } from '$utils/queryFunctions';

// ////////////////////////////////////////////////////////////
export const useUser = () => {
  const {
    data: user,
    isLoading,
    isError
  } = useQuery('user', getMe, {
    retry: false,
    enabled: !!getUser(),
    cacheTime: Infinity,
    staleTime: Infinity
  });

  return { user, isLoading, isError };
};

// ////////////////////////////////////////////////////////////
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess(response) {
      // Destruct token from Axios response
      const { token, user } = response;

      // Set jwt token in local storage
      login(token);

      // Update query cache for user
      queryClient.setQueryData('user', user);
    },
    onError(err) {
      console.log(err.response?.data || err);
    }
  });
};

// ////////////////////////////////////////////////////////////
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMe,
    onSuccess(user) {
      queryClient.setQueryData('user', user);
    }
  });
};

// ////////////////////////////////////////////////////////////
export const useSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signupUser,
    onSuccess(response) {
      // Destruct token from Axios response
      const { token, user } = response;

      // Set jwt token in local storage
      login(token);

      // Update query cache for user
      queryClient.setQueryData('user', user);
    },
    onError(err) {
      console.log(err.response?.data || err);
    }
  });
};

export default useLogin;
