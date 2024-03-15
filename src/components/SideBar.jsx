import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ServiceRequestIcon from '../icons/ServiceRequestIcon';
import VendorsIcon from '../icons/VendorsIcon';
import UsersIcon from '../icons/UsersIcon';
import ServicesIcon from '../icons/ServicesIcon';
import PaymentsIcon from '../icons/PaymentsIcon';
import HomeIcon from '../icons/HomeIcon';
import { ReactComponent as Logo } from '../icons/logo.svg';

const sidebarItems = [
  { path: '/', name: 'Home', icon: <HomeIcon /> },
  {
    path: '/service-requests',
    name: 'Service Requests',
    icon: <ServiceRequestIcon />
  },
  { path: '/vendors', name: 'Vendors', icon: <VendorsIcon /> },
  { path: '/users', name: 'Users', icon: <UsersIcon /> },
  { path: '/service', name: 'Service', icon: <ServicesIcon /> },
  { path: '/payments', name: 'Payments', icon: <PaymentsIcon /> }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-primary text-primary-lighter w-[260px] min-h-screen flex flex-col justify-between">
      <div className=" p-4">
        <Logo />
        <div className="mt-8">
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`ml-4 flex gap-2 items-center py-4`}
              style={({ isActive }) => {
                return {
                  color: isActive && '#FFBA49'
                };
              }}>
              {React.cloneElement(item.icon, {
                color: location.pathname === item.path ? '#FFBA49' : '#CFCCD6'
              })}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
