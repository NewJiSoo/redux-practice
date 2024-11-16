import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../redux/user/userSlice";
import { selectTimer, setTimer, tick } from "../redux/timer/timerSlice";
import { clearToken, setToken } from "../redux/user/authSlice";

function Home() {
  const user = useSelector(selectTimer); // 리덕스 상태 가져오기
  const dispatch = useDispatch(); // 액션을 디스패치할 수 있는 함수

  const timer = useSelector((state) => state.timer);

  const handleClick = () => {
    // dispatch(setTimer({ roundTime: 1 }));
    dispatch(tick());
  };

  const token = useSelector((state) => state.auth.token);

  const handleTokenClick = () => {
    // dispatch(setTimer({ roundTime: 1 }));
    dispatch(setToken("김토큰"));
  };

  const handleTokenRemove = () => {
    // dispatch(setTimer({ roundTime: 1 }));
    dispatch(clearToken());
  };

  const handleLogin = () => {
    dispatch(setUser({ id: 3, email: "2@주소.com" }));
  };

  const handleLogout = () => {
    dispatch(clearUser()); // 로그아웃 처리
  };
  return (
    <div>
      <h1>토큰이당</h1>
      <div>{token}</div>
      <button onClick={handleTokenClick}>토큰 가져오기</button>
      <button onClick={handleTokenRemove}>토큰 삭제하기</button>
      <h1>Redux User Management</h1>
      {user.id ? (
        <div>
          <p>하이,{user.email}!</p>
        </div>
      ) : (
        <p>로그인해주세요</p>
      )}
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleLogout}>로그아웃</button>
      <div>-----------------------------------------</div>
      <div>roundTime {timer.roundTime}</div>
      <div>trueTime {timer.trueTime}</div>
      <div>countTime {timer.countTime}</div>
      <button onClick={handleClick}>타이머</button>
    </div>
  );
}

export default Home;
