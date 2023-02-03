import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import serviceApi from '../service/http.service';

type ButtonType = {
  itemId: string;
};

const DeleteBtn: React.FC<ButtonType> = ({ itemId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: string) => {
      const result = serviceApi.delete(id);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      }
    }
  );

  // if (mutation.isSuccess) {
  //   console.log('todo deleted');
  // }
  // if (mutation.isError) {
  //   console.log(`error: ${mutation.error}`);
  // }

  return (
    <button
      type="button"
      onClick={() => {
        mutation.mutate(itemId);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
