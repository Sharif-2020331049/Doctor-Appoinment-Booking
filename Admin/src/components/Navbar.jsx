import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../contexts/AdminContext';

function Navbar() {
  const { adminToken, setAdminToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    adminToken && setAdminToken('');
    adminToken && localStorage.removeItem('adminToken');
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-sm flex justify-between items-center px-4 sm:px-10 py-3 border-b z-50">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} alt="Logo" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {adminToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button onClick={logout} className="bg-indigo-500 text-white text-sm px-10 py-2 rounded-full">
        Logout
      </button>
    </div>
  );
}

export default Navbar;