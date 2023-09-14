import { Outlet } from "react-router-dom";
import "./RootLayout.css";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
