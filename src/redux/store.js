// store : 상태 데이터를 저장하는 중앙 저장소
// 애플리케이션의 전체 상태 트리를 보유한다

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

// store 설정
const store = configureStore({
  reducer: {
    user: userReducer, // user 상태를 관리하는 리듀서를 추가
  },
});

export default store;
