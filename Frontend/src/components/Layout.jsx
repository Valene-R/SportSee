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
      <div className="flex flex-1">
        <Sidebar />
        <main className="mb-[86px] ml-[107px] mr-[90px] mt-[68px] flex-1 bg-white">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
