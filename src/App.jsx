import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import RegistrationForm from './components/RegistrationForm';
import UserDetails from './components/UserDetails';
import PasswordReset from './components/PasswordReset';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='/signin' element={<SignIn />}> </Route>
          <Route path='/register' element={<RegistrationForm />}> </Route>
          <Route path='/userInfo' element={<UserDetails />}> </Route>
          <Route path='/PasswordReset' element={<PasswordReset />}> </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App