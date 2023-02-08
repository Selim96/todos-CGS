import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { StatusSwitch, PrivateSwitch } from '../Buttons';
import serviceApi from '../service/http.service';
// import { IItem } from '../common/types/student.types';

const DetailPaige: React.FC = () => {
  // const [todo, setTodo] = useState<IItem | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handlGoBack = () => {
    navigate('/home');
  };

  function useTodo(todoId: string | undefined) {
    return useQuery(['todo', todoId], () => serviceApi.getById(todoId).then((res) => res.data), {
      enabled: !!todoId
    });
  }

  const { isLoading, isError, isSuccess, data } = useTodo(id);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isError ? <div>An error occurred: </div> : null}
          {isSuccess ? (
            <div>
              <h2>{data.title}</h2>
              <p>Description:</p>
              <p>{data.description}</p>
              <div>
                <span>Complete</span>
                <StatusSwitch checked={data.status} itemId={id} />
              </div>
              <div>
                <span>Private</span>
                <PrivateSwitch checked={data.isPrivate} itemId={id} />
              </div>
              <button type="button" onClick={handlGoBack}>
                Back
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default DetailPaige;
