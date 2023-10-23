import { Routes, Route } from 'react-router-dom';

function RouteConfig({ menuData }) {
  return (
    <Routes>
      {menuData.map((item) => (
        <Route path={item.path} element={item.component}></Route>
      ))}
    </Routes>
  );
}

export default RouteConfig;
