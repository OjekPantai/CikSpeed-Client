import PublicNavbar from "@/components/PublicNavbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <PublicNavbar />
      </header>
      <main className="flex-1 container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
