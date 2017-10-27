import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const StarPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            여기는 STAR IT 기업에 맞춘 사이트를 만들꺼에요
          </h1>
          <h2>
            생각해봅시다.!!
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default StarPage;