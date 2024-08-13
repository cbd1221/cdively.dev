import { useState } from "react";
import styles from "../Styles/nav.module.css";

interface NavbarProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({setCurrentView}: NavbarProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);


  const navItems = ["about", "skills", "contact"];

  const onMouseHover = (itemID: string) => {
    setHoveredLink(itemID);
  };

  const onMouseHoverEnd = () => {
    setHoveredLink(null);
  };

  const handleClick = (itemID: string) => {
    setCurrentView(itemID);
  };



  return (
    <header>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  className={`${styles.navLink} ${
                    hoveredLink && hoveredLink !== item ? styles["faded"] : ""
                  }`}
                  id={item}
                  href={`#${item}`}
                  onMouseEnter={() => onMouseHover(item)}
                  onMouseLeave={onMouseHoverEnd}
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
