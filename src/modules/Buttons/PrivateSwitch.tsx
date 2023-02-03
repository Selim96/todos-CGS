import React from 'react';
import Switch from '@mui/material/Switch';
import { useMutation, useQueryClient } from 'react-query';
import serviceApi from '../service/http.service';
import { PrivatePatch } from '../common/types/student.types';

type SwitchProps = {
  checked: boolean | undefined;
  itemId: string;
};

const PrivateSwitch: React.FC<SwitchProps> = ({ checked, itemId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (payload: PrivatePatch) => {
      const result = serviceApi.patch(`${itemId}/private`, payload);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todo');
      }
    }
  );

  return (
    <Switch
      checked={checked}
      onChange={() => {
        mutation.mutate({ isPrivate: !checked });
      }}
    />
  );
};

export default PrivateSwitch;
