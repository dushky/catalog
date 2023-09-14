import { Outlet } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="layout-content">
      <Outlet />
    </div>
  );
};

export default RootLayout;
