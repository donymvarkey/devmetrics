import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useAppSelector } from "./hooks";
import { useNavigate } from "react-router";
import { checkIfAuthenticated } from "./lib/utils";

const App = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (checkIfAuthenticated(isAuthenticated)) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="w-full h-full">
      <AppRoutes />
    </div>
  );
};

export default App;
