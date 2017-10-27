import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const OperPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            실무적인 강의 페이지를 만들꺼에요
          </h1>
          <h2>
            SOCIAL 스타일로 만들어 볼까요?
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default OperPage;