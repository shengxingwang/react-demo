import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function Menu({ menuData }) {
  const pathObj = useLocation();
  useEffect(() => {
    console.log(pathObj);
  }, []);
  const menuList = menuData.map((item) => (
    <Link
      className={
        pathObj.pathname === item.path ? 'link-item active' : 'link-item'
      }
      to={item.path}
    >
      {item.name}
    </Link>
  ));
  return <div className="menu">{menuList}</div>;
}

export default Menu;
