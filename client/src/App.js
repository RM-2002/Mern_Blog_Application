import Topbar from "./components/topbar/Topbarname";
import Home from "./pages/home/Homefull";
import Single from "./pages/single/Singlefull";
import Write from "./pages/write/Writefull";
import Settings from "./pages/settings/Settingsfull";
import Login from "./pages/login/Loginfull";
import Register from "./pages/register/Registerfull";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
return (
  <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
