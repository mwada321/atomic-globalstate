import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}
// 上記により、UserProvider配下でContextが使える
// 上記により、RecoilRoot配下でrecoilで設定したuserStateが使える
