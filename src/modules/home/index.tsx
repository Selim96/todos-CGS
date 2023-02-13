import React, { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import Media from 'react-media';
import serviceApi from '../service/http.service';
import HomeTablet from './HomeTablet/HomeTablet';
import TabletSlider from './TabletSlider/TabletSlider';
import MobileList from './MobileList/MobileList';
import Container from '../Container';
import AddTodoModal from '../AddTodoModal/AddTodoModal'; 
import s from './index.module.scss';

const HomePage: React.FC = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  const { isLoading, isError, isSuccess, data } = useQuery('todos', () =>
    serviceApi.get().then((res) => res.data).catch(error=>error.message)
  );

  const openAddModal = () => {
    setIsOpenAddModal(true);
  };
  const closeAddModal = () => {
    setIsOpenAddModal(false);
  }
  const closed = useCallback(() => {
    closeAddModal();
  }, []);

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {isError ? <div>An error occurred: </div> : null}
          {isSuccess ? (
            <>
              <Container>
              <Media
                queries={{
                  small: '(max-width: 767px)',
                  maxSmall: '(min-width: 768px)',
                  medium: '(max-width: 1279px)',
                  large: '(min-width: 1280px)'
                }}
              >
                {(matches) => (
                  <div className={s.main}>
                    <button type='button' onClick={openAddModal}>New Todo</button>
                    <input type="text" name="query" placeholder='query'/>
                    {matches.small && <MobileList data={data} />}
                    {matches.maxSmall && matches.medium && <TabletSlider data={data} />}
                    {matches.large && (
                      <div>
                        <HomeTablet data={data} />
                      </div>
                    )}
                  </div>
                )}
              </Media>
              </Container>
                {isOpenAddModal && <AddTodoModal closeFunc={closed} />}
            </>
            
          ) : null}
        </>
      )}
    </>
  );
};

export default HomePage;
