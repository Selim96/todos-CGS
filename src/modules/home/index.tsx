import React from 'react';
import { useQuery } from 'react-query';
import Media from 'react-media';
import serviceApi from '../service/http.service';
import HomeTablet from './HomeTablet/HomeTablet';
import TabletSlider from './TabletSlider/TabletSlider';
import MobileList from './MobileList/MobileList';

const HomePage: React.FC = () => {
  const { isLoading, isError, isSuccess, data } = useQuery('todos', () =>
    serviceApi.get().then((res) => res.data)
  );

  console.log(data);

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {isError ? <div>An error occurred: </div> : null}
          {isSuccess ? (
            <div>
              <Media
                queries={{
                  small: '(max-width: 767px)',
                  maxSmall: '(min-width: 768px)',
                  medium: '(max-width: 1279px)',
                  large: '(min-width: 1280px)'
                }}
              >
                {(matches) => (
                  <div id="container">
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
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default HomePage;
