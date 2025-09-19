import { Route, Routes } from "react-router";
import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicRoute from "@/components/PublicRoute";
import ForgotPassword from "@/pages/ForgotPassword";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import { useAppSelector } from "@/hooks";
import Analytics from "@/pages/Analytics";
import Contributors from "@/pages/Contributors";
import Activity from "@/pages/Activity";
import Timeline from "@/pages/Timeline";
import Settings from "@/pages/Settings";

const AppRoutes = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <AuthLayout />
          </PublicRoute>
        }
      >
        <Route index element={<AuthPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="contributors" element={<Contributors />} />
        <Route path="activity" element={<Activity />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
