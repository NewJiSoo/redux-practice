// store : 상태 데이터를 저장하는 중앙 저장소
// 애플리케이션의 전체 상태 트리를 보유한다

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
import timerReducer from "./timer/timerSlice";
import authReducer from "./user/authSlice";
import { persistReducer, persistStore } from "redux-persist";

// 여러 리듀서를 결합
const reducers = combineReducers({
  user: userReducer, // user 상태를 관리
  timer: timerReducer, // timer 상태를 관리
  auth: authReducer,
});

// persist 설정
const persistConfig = {
  key: "root", // 최상위 상태를 영구 저장
  storage, // 저장소를 로컬 스토리지로 지정
  whitelist: ["user"], // user 상태만 영구 저장
  blacklist: ["timer", "auth"], // timer 상태는 영구 저장에서 제외
};

// persistReducer로 감싸기
const persistedReducer = persistReducer(persistConfig, reducers);

// store 생성
const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false, // 직렬화 체크 비활성화
    }),
});

// persistStore 생성
export const persistor = persistStore(store);
export default store;
