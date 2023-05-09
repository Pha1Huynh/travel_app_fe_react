import React from 'react';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import { publicRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './redux/config/hooks';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            const Component = item.component;
            return <Route key={index} path={item.path} element={<Component />} />;
          })}
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Router>
  );
};

export default App;
