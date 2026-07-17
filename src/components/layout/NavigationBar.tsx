import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/Theme";
import { NAVIGATION_ITEMS } from "../../constants/Navigation";

function NavigationBar() {
  const navStyle = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "12px",
    padding: "10px 20px",
    backgroundColor: COLORS.navigationBackground,
    borderBottom: `1px solid ${COLORS.border}`,
  };

  const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    color: isActive ? COLORS.primaryText : COLORS.primary,
    backgroundColor: isActive ? COLORS.primary : "transparent",
    padding: "6px 10px",
    borderRadius: "4px",
    fontWeight: 600,
  });

  return (
    <nav style={navStyle}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={"end" in item ? item.end : false}
          style={getLinkStyle}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationBar;