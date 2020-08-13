/**
 * @name: Login
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 15:48
 * @description：Login
 */
import React,{useState} from 'react';
import 'antd/dist/antd.css'
import {Card,Input,Button,Icon,Spin,message} from 'antd'
import axios from 'axios'
import '../static/css/Login.css'
import servicePath from "../config/apiUrl";

function Login(props) {

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const checkLogin = ()=>{
    setIsLoading(true)
    if(!userName){
      message.error('username can\'t be empty')
      setTimeout(()=>{setIsLoading(false)},500)
      return false
    }else if(!password){
      message.error('password can\'t be empty')
      setTimeout(()=>{setIsLoading(false)},500)
      return false
    }
    let dataProps = {
      userName:userName,
      password:password
    }
    axios({
      method:'post',
        url:servicePath.checkLogin,
        data:dataProps,
        withCredentials: true
    }).then(res=>{
      setIsLoading(false)
      if(res.data.data === 'success'){
        localStorage.setItem('openId',res.data.openId)
        props.history.push('/index')
      }else{
        message.error('username or password error')
      }
    })
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
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br/><br/>
          <Button type="primary" size="large" block onClick={checkLogin}>Login</Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;