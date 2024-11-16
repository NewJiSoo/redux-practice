// reducer : 상태를 어떻게 변경할지 명시
// action : 상태 변경

import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = {
  id: null,
  email: "",
};

// userSlice 만들기
const userSlice = createSlice({
  name: "user", // Slice의 이름
  initialState, // 초기 상태
  reducers: {
    setUser: (state, action) => {
      // action.payload에서 전달된 user 정보를 받아서 상태 업데이트
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      // 사용자가 로그아웃할 때 상태 초기화
      state.id = null;
      state.email = "";
    },
  },
});

// 생성된 액션과 리듀서를 export
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
