/* eslint-disable react/prop-types */
import AdminIcon from '../icons/AdminIcon';
import DropDownIcon from '../icons/DropDown';
import NotificationIcon from '../icons/NotificationIcon';

const TopBar = ({ title }) => {
  return (
    <section className="flex items-center w-full justify-between">
      <span className="font-bold text-base">{title}</span>
      <div className="flex gap-2 w-[158px]">
        <NotificationIcon />
        <div className="mx-2 flex items-center gap-2">
          <AdminIcon />
          <span className="font-normal text-sm">Admin</span>
        </div>
        <DropDownIcon />
      </div>
    </section>
  );
};
export default TopBar;
