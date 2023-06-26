import { Link, useLocation } from "react-router-dom";

export const SpanBullet = ({ pathname }) => {
  const location = useLocation();
  const bulletStyle = { 
    height: "22px",
    width: "22px", 
    borderRadius: "20px",
    border: "1px solid #212121",
  };
  const activeBulletStyle = {
    height: "30px",
    width: "30px", 
    borderRadius: "20px",
    border: "1px solid #212121",
    opacity: "0.7",
    backgroundColor: "#212121"
  };

  if (location.pathname === pathname) {
    return <span style={activeBulletStyle}></span>;
  } else {
    return (
        <Link to={ pathname } style={{ display: "flex", alignItems: "center"}}>
            <span style={bulletStyle}></span>
        </Link>
    )
  }
};