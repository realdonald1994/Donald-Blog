/**
 * @name: AdminIndex.jsx
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 20:14
 * @description：AdminIndex.jsx
 */
import React,{useState} from "react";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../static/css/AdminIndex.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex()  {
  const [collapsed,setCollapsed] = useState(false)

  const onCollapse =  collapsed => {
    setCollapsed(collapsed)
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>workplace</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Add</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Blog</span>
              </span>
            }
          >
            <Menu.Item key="3">Add</Menu.Item>
            <Menu.Item key="4">List</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>Comment</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Workplace</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>xxxxxxxxxxxxxxxxxx</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Donald.com</Footer>
      </Layout>
    </Layout>
  );

}

export default AdminIndex