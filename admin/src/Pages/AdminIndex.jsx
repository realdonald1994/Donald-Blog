/**
 * @name: AdminIndex.jsx
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 20:14
 * @description：AdminIndex.jsx
 */
import React,{useState} from "react";
import {Route} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import '../static/css/AdminIndex.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props)  {
  const [collapsed,setCollapsed] = useState(false)

  const onCollapse =  collapsed => {
    setCollapsed(collapsed)
  };

  const handleClickArticle = (e)=>{
    if(e.key=='addArticle'){
      props.history.push('/index/add')
    }else{
      props.history.push('/index/list')
    }
  }

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
            onClick={handleClickArticle}
          >
            <Menu.Item key="addArticle">Add</Menu.Item>
            <Menu.Item key="articleList">List</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>Comment</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Workplace</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Route path="/index/" exact component={AddArticle}/>
              <Route path="/index/add" exact component={AddArticle}/>
              <Route path="/index/list" exact component={ArticleList}/>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Donald.com</Footer>
      </Layout>
    </Layout>
  );

}

export default AdminIndex