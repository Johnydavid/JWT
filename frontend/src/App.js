import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user &&
        <Route path="/" exact element={<Home />}></Route>}
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/" exact element={<Navigate replace to="/login" />}></Route>
    </Routes>
  );
}

export default App;
