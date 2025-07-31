import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Mail, Palette } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-gray-800 border-r border-gray-700 transition-all duration-500 hidden lg:block">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 mb-8">
            <Palette className="w-8 h-8 text-blue-400" />
            <span className="ml-3 text-xl font-bold text-gray-100">Navigation</span>
          </div>
          
          <nav className="mt-5 flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-105'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="flex-shrink-0 p-6 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            Theme 2: Professional Dark
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;