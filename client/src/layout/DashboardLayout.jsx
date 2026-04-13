import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
