import React, {useState,useEffect} from 'react'
import Head from 'next/head'
import {Row, Col, List, Icon,Breadcrumb} from "antd";
import axios from 'axios'
import Link from "next/link";

import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";

import servicePath from "../config/apiUrl";


const MyList = (list) => {

  const [myList,setMyList] = useState(list.data)

  useEffect (()=>{
    setMyList(list.data)
  },[list])
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item>Blog</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>Newest Blog</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item=>(
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><Icon type="calender"/> {item.addTime}</span>
                  <span><Icon type="folder"/> {item.typeName}</span>
                  <span><Icon type="fire"/> {item.view_count}</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

MyList.getInitialProps = async (context)=>{
  let id = context.query.id
  const res = await axios.get(servicePath.getListById+id)
  return res.data
}

export default MyList
