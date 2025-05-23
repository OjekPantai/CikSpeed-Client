import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  BookText,
  History,
  TicketPlus,
  BookUser,
} from "lucide-react";

const SidebarAdmin = ({ isOpen, mobile = false }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      width: "240px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      width: "0px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const sidebarItems = [
    {
      icon: <Home className="mr-2 h-4 w-4" />,
      text: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: <BookText className="mr-2 h-4 w-4" />,
      text: "Reservasi",
      path: "/admin/reservations",
    },
    {
      icon: <TicketPlus className="mr-2 h-4 w-4" />,
      text: "Gejala Kerusakan",
      path: "/admin/symptoms",
    },
    {
      icon: <Users className="mr-2 h-4 w-4" />,
      text: "Mekanik",
      path: "/admin/mechanics",
    },
    {
      icon: <History className="mr-2 h-4 w-4" />,
      text: "Riwayat",
      path: "/admin/history",
    },
    {
      icon: <BookUser className="mr-2 h-4 w-4" />,
      text: "Pengguna",
      path: "/admin/users",
    },
  ];

  // Mobile sidebar
  if (mobile) {
    return (
      <motion.aside
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-background shadow-md z-40 overflow-hidden lg:hidden"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center w-full px-3 py-2 rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                {item.icon}
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.aside>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 bg-background shadow-md z-40">
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center w-full px-3 py-2 rounded-md transition-colors
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted hover:text-foreground"
                }
              `}
            >
              {item.icon}
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
