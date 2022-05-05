// contextでグローバルなstateを管理する
import React, { createContext, useState } from "react";

// 空のオブジェクトで初期化
export const UserContext = createContext({});

// children
export const UserProvider = (props) => {
  const { children } = props;
  // stateを定義する
  const [userInfo, setUserInfo] = useState();

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
