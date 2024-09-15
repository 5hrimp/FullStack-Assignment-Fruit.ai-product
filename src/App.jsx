import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignUpCard";
import Dashboard from "./components/Dashboard";
import Translator from "./components/Translator";
import './App.css';

function App() {
  window.localStorage.setItem("isLoggedIn","false");
  const isLoggedin = window.localStorage.getItem("isLoggedIn");
  return (
    <>
      <Router>
        <Routes>
          {/* {
            isLoggedin =="false" ?(
              <> */}
              <Route path="/login" element={<LoginCard />} />
              <Route path="/signup" element={<SignupCard />} />
              <Route path="/" element={<Navigate to={'/login'}/>} />
              {/* </>
            ) :(
              <> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/translator" element={<Translator />} />
              
              {/* </>
            )
          } */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
