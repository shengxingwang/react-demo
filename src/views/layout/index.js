import { BrowserRouter, Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useState } from 'react';
import Menu from './menu';
import RouteConfig from './../../routes';

import Home from './../home';
import GoodList from './../goodsManage';
import Group from './../goodsManage/Group';
import Detail from './../goodsManage/Detail';
function Layout() {
  const [menuList, setMenuList] = useState([
    { name: '首页', path: '/', component: <Home></Home> },
    { name: '商品管理', path: '/goods', component: <GoodList></GoodList> },
    { name: '商品分组', path: '/goods/group', component: <Group></Group> },
    { name: '商品详情', path: '/goods/Detail', component: <Detail></Detail> },
  ]);
  return (
    <ConfigProvider
      menuData={menuList}
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#7cb305',
        },
      }}
    >
      <BrowserRouter>
        <Menu menuData={menuList} />
        <div className="main">
          <div className="container">
            <RouteConfig menuData={menuList} />
            <Outlet></Outlet>
          </div>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default Layout;
