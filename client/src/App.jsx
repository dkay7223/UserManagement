import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Home, Login, SignUp, User } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/signup" element={<SignUp/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/admin" element={<Admin/>}/>
        <Route path ="/user" element={<User/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
