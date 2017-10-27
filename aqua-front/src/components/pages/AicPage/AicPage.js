import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const AicPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            AI코스 만들꺼에요.
          </h1>
          <h2>
            인공지능 크롤러가 필요합니다 백엔드 만들어주세요!!
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default AicPage;