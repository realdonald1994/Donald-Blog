/**
 * @name: Login
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 15:48
 * @description：Login
 */
import React,{useState} from 'react';
import 'antd/dist/antd.css'
import {Card,Input,Button,Icon,Spin} from 'antd'

import '../static/css/Login.css'
function Login(props) {

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const checkLogin = ()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  }

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="Donald Blog System" bordered={true} style={{width:400}}>
          <Input
            id="userName"
            size="large"
            placeholder="username"
            prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br/><br/>
          <Input.Password
            id="password"
            size="large"
            placeholder="password"
            prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br/><br/>
          <Button type="primary" size="large" block onClick={checkLogin}>Login</Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;