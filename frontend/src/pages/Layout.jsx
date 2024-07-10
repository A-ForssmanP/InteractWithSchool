import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ height: "100%" }}>
      <Outlet />
    </div>
  );
}

export default Layout;
