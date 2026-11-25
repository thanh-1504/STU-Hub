import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { VerifyOTP } from "../pages/VerifyOTP";

export const router = createBrowserRouter([
  {
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "verify-otp", element: <VerifyOTP /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
]);
