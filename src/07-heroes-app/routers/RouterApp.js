import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutScreen } from "../components/about/AboutScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutScreen />}></Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
