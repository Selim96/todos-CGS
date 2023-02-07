import React from 'react';
import { useQuery } from 'react-query';
import Media from 'react-media';
import serviceApi from '../service/http.service';
import HomeTablet from './HomeTablet/HomeTablet';
import TabletSlider from './TabletSlider/TabletSlider';
import MobileList from './MobileList/MobileList';
import Container from '../Container';
import s from './index.module.scss';

const HomePage: React.FC = () => {
  const { isLoading, isError, isSuccess, data } = useQuery('todos', () =>
    serviceApi.get().then((res) => res.data)
  );

  console.log(data);

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {isError ? <div>An error occurred: </div> : null}
          {isSuccess ? (
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
                    <button>New Todo</button>
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
          ) : null}
        </>
      )}
    </>
  );
};

export default HomePage;
