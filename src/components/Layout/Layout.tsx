import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout(): JSX.Element {
  return (
    <div className="max-w-[90rem] m-auto">
      <Navigation />
      <div>{<Outlet />}</div>
      <Footer />
    </div>
  );
}

export default Layout;
