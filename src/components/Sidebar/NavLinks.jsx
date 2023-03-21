import dashboardIcon from "../../assets/images/dashboard-icon.svg";
import invoicesIcon from "../../assets/images/invoices-icon.svg";
import customersIcon from "../../assets/images/customers-icon.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  const { pathname } = useLocation();

  const LINKS = [
    { title: "Dashboard", link: "/", icon: dashboardIcon },
    { title: "Invoices", link: "/invoices", icon: invoicesIcon },
    { title: "Customers", link: "/customers", icon: customersIcon },
  ]
  console.log(pathname)

  return (
    <div>
      {
        LINKS.map(({ title, link, icon }, i) => (
          <NavLink
            key={i}
            link={link}
            active={pathname === link}
            icon={icon}
            title={title}
          />
        ))
      }
    </div>
  )
}
