import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../redux/user/userSlice";

function Home() {
  const user = useSelector((state) => state.user); // 리덕스 상태 가져오기
  const dispatch = useDispatch(); // 액션을 디스패치할 수 있는 함수

  const handleLogin = () => {
    dispatch(setUser({ id: 3, email: "2@주소.com" }));
  };

  const handleLogout = () => {
    dispatch(clearUser()); // 로그아웃 처리
  };
  return (
    <div>
      <h1>Redux User Management</h1>
      {user.id ? (
        <div>
          <p>하이, {user.email}!</p>
        </div>
      ) : (
        <p>로그인해주세요</p>
      )}
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Home;
