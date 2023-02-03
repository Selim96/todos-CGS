import React from 'react';
import Switch from '@mui/material/Switch';
import { useMutation, useQueryClient } from 'react-query';
import serviceApi from '../service/http.service';
import { StatusPatch } from '../common/types/student.types';

type SwitchProps = {
  checked?: boolean | undefined;
  itemId: string;
};

const StatusSwitch: React.FC<SwitchProps> = (props) => {
  // const [status, setStatus] = useState<boolean>(false);
  const { checked, itemId } = props;

  // function useStatus(todoId: string) {
  //   return useQuery(['status', todoId], () => serviceApi.getById(todoId).then((res) => res.data), {
  //     enabled: !!todoId
  //   });
  // }

  // const { isSuccess, data } = useStatus(itemId);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (payload: StatusPatch) => {
      const result = serviceApi.patch(`${itemId}/completed`, payload);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
        queryClient.invalidateQueries('todo');
      }
    }
  );

  return (
    <Switch
      checked={checked}
      onChange={() => {
        mutation.mutate({ status: !checked });
      }}
    />
  );
};

export default StatusSwitch;
