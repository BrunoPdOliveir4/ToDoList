import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components";
import { LoginScreen, RegisterScreen } from "../screens";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={
          <PrivateRoute>
            <div>Protected Home Page</div>
          </PrivateRoute>
        } />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;