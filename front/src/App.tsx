import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { AUTH_PATH, LOCAL_PATH, QNA_DETAIL_PATH, QNA_PATH, QNA_UPDATE_PATH, QNA_WRITE_PATH, RATIO_PATH, SERVICE_PATH } from './constant';
import Authentication from './views/Authentication';
import ServiceContainer from './layouts/ServiceContainer';
import Local from './views/service/Local';
import QnaUpdate from './views/service/qna/QnaUpdate';
import NotFound from './views/NotFound';
import QnaWrite from './views/service/qna/QnaWrite';
import QnaDetail from './views/service/qna/QnaDetail';
import Ratio from './views/service/Ratio';

function App() {
  return (
    <Routes>
      <Route path={AUTH_PATH} element={<Authentication />} />
      <Route path={SERVICE_PATH} element={<ServiceContainer />} >
        <Route path={LOCAL_PATH} element={<Local />} />
        <Route path={RATIO_PATH} element={<Ratio />} />
        <Route path={QNA_PATH} >
          {/* 공통적인 요소를 넣어주고싶을때(ex. top, sidebar) */}
          <Route index element={<QnaUpdate />} />
          {/*  */}
          <Route path={QNA_WRITE_PATH} element={<QnaWrite />} />
          <Route path={QNA_DETAIL_PATH} element={<QnaDetail />} />
          <Route path={QNA_UPDATE_PATH} element={<QnaWrite />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

// - authentication (로그인, 회원가입)
// - service
//   - locale (지역평균)
//   - ratio (비율 계산)
//   - qna (QnA 리스트)
//     - :boardNumber (QnA 상세보기)
//     - write (QnA 작성)
//     - update/:boardNumber (QnA 수정)
