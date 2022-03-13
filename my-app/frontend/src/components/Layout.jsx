import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            Hello
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;