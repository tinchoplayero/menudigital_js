import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  restaurantName: string;
  logo: string;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ restaurantName, logo, onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt={`${restaurantName} logo`} className="w-10 h-10 mr-2" />
        <h1 className="text-xl font-bold">{restaurantName}</h1>
      </div>
      <button onClick={onMenuClick} className="p-2 rounded-full hover:bg-gray-200">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;