import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full h-[100vh] md:container mx-auto flex items-center">
      <div className="hidden h-full md:flex md:w-1/2  items-center justify-center ">
        <div>
          <h1 className="text-6xl font-bold text-gray-300">DevMetrics</h1>
          <p className="text-gray-600">Track contributions like a pro</p>
        </div>
      </div>
      <div className="w-full h-full md:w-1/2 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
