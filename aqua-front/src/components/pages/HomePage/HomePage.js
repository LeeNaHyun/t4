import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            렌더 페이지 만들기
          </h1>
          <h2>
            어떻게 만들까요?
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default HomePage;