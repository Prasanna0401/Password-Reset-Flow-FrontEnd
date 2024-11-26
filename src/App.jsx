import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;