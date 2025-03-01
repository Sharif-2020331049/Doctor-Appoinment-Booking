import { useContext } from 'react';
import './App.css';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';

function App() {
  const { adminToken } = useContext(AdminContext);

  return adminToken ? (
    <div className="w-full min-h-screen">
      <ToastContainer />
      <Navbar />
      <div className="flex pt-16"> {/* Add padding-top to account for the fixed Navbar */}
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Main content goes here */}

          <Routes>

            <Route path='/'  element={<></>}/>
            <Route path='/admin-dashboard'  element={ <Dashboard/> }/>
            <Route path='/all-appointments'  element={ <AllAppointments/> }/>
            <Route path='/add-doctor'  element={ <AddDoctor/> }/>
            <Route path='/doctor-list'  element={ <DoctorList/> }/>


          </Routes>
        
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;