import Header from "./header/Header";
import PropTypes from "prop-types";
import Sidebar from "./sidebar/Sidebar";

/**
 * Structure the application
 * @param {Object} props Component properties
 * @param {React.ReactNode} props.children Children components to render
 * @returns {JSX.Element} The layout with header and children
 */
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen min-w-[1024px] flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="mt-[68px] w-auto flex-1 bg-white xl:ml-[107px] xl:mr-[90px]">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
