import SidebarIcon from "./SidebarIcon";
import yogaIcon from "../../assets/icon-yoga.png";
import swimIcon from "../../assets/icon-swim.png";
import bikeIcon from "../../assets/icon-bike.png";
import dumbbellIcon from "../../assets/icon-dumbbell.png";

/**
 * Display a sidebar with navigation icons and a copyright
 * @returns {JSX.Element} The sidebar component
 */
const Sidebar = () => {
  return (
    <aside className="relative top-[-1px] flex min-h-[933px] w-full min-w-[110px] max-w-[117px] flex-col justify-center bg-black">
      {/* Container for vertically aligned navigation icons */}
      <div className="absolute top-64 flex flex-col items-center justify-center space-y-5 px-6">
        <SidebarIcon icon={yogaIcon} altText="Yoga Icon" />
        <SidebarIcon icon={swimIcon} altText="Swim Icon" />
        <SidebarIcon icon={bikeIcon} altText="Bike Icon" />
        <SidebarIcon icon={dumbbellIcon} altText="Dumbbell Icon" />
      </div>
      {/* Copyright text positioned at the bottom */}
      <div className="flex items-center justify-center">
        <p className="absolute bottom-28 -rotate-90 whitespace-nowrap bg-black text-xs text-white">Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
};

export default Sidebar;
