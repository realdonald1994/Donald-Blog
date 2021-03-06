import React,{useState,useEffect} from "react";

import {List,Row,Col,Modal,message,Button} from 'antd'

import axios from 'axios'
import servicePath from "../config/apiUrl";
import '../static/css/ArticleList.css'

const {confirm} = Modal

function ArticleList(props){
  const [list,setList]  = useState([])

  useEffect(()=>{
    getList()
  },[])
  const getList = () =>{
    axios({
      method:'get',
      url:servicePath.getArticleList,
      withCredentials:true,
      header:{ 'Access-Control-Allow-Origin':'*' }
    }).then(res=>{
      setList(res.data.data)
    })
  }


  const delArticle =(id) =>{
    confirm({
      title:'Delete tip',
      content:'are your sure to delete blog?',
      onOk(){
        axios(servicePath.delArticle+id,{withCredentials: true}).then(res=>{
          message.warning('delete success')
          getList()
        })
      },
      onCancel(){
        message.info('cancel delete')
      }
    })
  }
  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>Title</b>
            </Col>
            <Col span={4}>
              <b>Type</b>
            </Col>
            <Col span={4}>
              <b>Date</b>
            </Col>
            <Col span={4}>
              <b>Views</b>
            </Col>
            <Col span={4}>
              <b>Operation</b>
            </Col>
          </Row>
        }
        bordered
        dataSource={list}
        renderItem={item=>(
          <List.Item>
            <Row className="list-div">
              <Col span={8}>
                {item.title}
              </Col>
              <Col span={4}>
                {item.typeName}
              </Col>
              <Col span={4}>
                {item.addTime}
              </Col>
              <Col span={4}>
                {item.view_count}
              </Col>
              <Col span={4}>
                <Button type="primary" size="small">Modify</Button>&nbsp;
                <Button type="danger" size="small" onClick={()=>{delArticle(item.id)}}>Delete</Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ArticleList