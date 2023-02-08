import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import serviceApi from '../../service/http.service';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Props } from '../index';

const DeleteBtn: React.FC<Props> = ({ itemId }) => {
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
    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {
        mutation.mutate(itemId);
      }} >
      Delete
    </Button>
  );
};

export default DeleteBtn;
