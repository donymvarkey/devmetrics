import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectTo?: string;
  children: ReactNode;
};

const ProtectedRoute = ({
  isAuthenticated,
  redirectTo = "/auth",
  children,
}: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
