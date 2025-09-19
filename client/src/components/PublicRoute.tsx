import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

type PublicRouteProps = {
  isAuthenticated: boolean;
  redirectTo?: string;
  children: ReactNode;
};

const PublicRoute = ({
  isAuthenticated,
  redirectTo = "/dashboard",
  children,
}: PublicRouteProps) => {
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
