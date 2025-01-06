import Header from "./header/Header";
import PropTypes from "prop-types";

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
        <main className="flex-1 bg-white p-6">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
