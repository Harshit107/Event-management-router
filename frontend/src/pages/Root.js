import { Outlet } from "react-router-dom";
import MainNavigation from "./../components/MainNavigation";

const RootLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};
export default RootLayout;
