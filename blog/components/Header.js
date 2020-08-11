/**
 * @name: Header
 * @author: Zhongxu Huang
 * @date: 10/08/2020 20:37
 * @description：Header
 * @update: 10/08/2020 20:37
 */

import React from "react";
import '../static/style/components/header.css'

import {Row,Col,Menu,Icon} from "antd";

const Header = () =>(
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-log">Donald</span>
        <span className="header-txt">, an independent developer</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home"/>
            Home
          </Menu.Item>

          <Menu.Item key="video">
            <Icon type="youtube"/>
            Video
          </Menu.Item>

          <Menu.Item key="life">
            <Icon type="smile"/>
            Life
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)


export default Header