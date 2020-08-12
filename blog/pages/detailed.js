/**
 * @name: detailed
 * @author: Zhongxu(Donald)
 * @date: 10/08/2020 21:32
 * @description：detailed
 */

import React from "react";
import Head from "next/head";
import {Row,Col,Icon,Breadcrumb,Affix} from "antd";
import ReactMarkdown from "react-markdown";
import MarkNav from 'markdown-navbar'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'

import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tocify from "../components/tocify.tsx";

import 'highlight.js/styles/monokai-sublime.css'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/pages/detailed.css'
import '../static/style/components/header.css'
import servicePath from "../config/apiUrl";


const Detailed = (props) =>{
  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  //* ###
  renderer.heading = function(text, level, raw){
    const anchor = tocify.add(text,level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    highlight:function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">Blog</a></Breadcrumb.Item>
              <Breadcrumb.Item>xxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              React-blog-develop
            </div>
            <div className="list-icon center">
              <span><Icon type="calendar"/>2020-08-08</span>
              <span><Icon type="folder"/>React</span>
              <span><Icon type="fire"/>500</span>
            </div>
          </div>
          <div
            className="detailed-content"
            dangerouslySetInnerHTML={{__html:html}}
          >
          {/*  <div className="detailed-content">*/}
          {/*    <ReactMarkdown*/}
          {/*      source={props.article_content}*/}
          {/*      escapeHtml={false}*/}
          {/*    >*/}
          {/*    </ReactMarkdown>*/}
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">Catalogs</div>
              {/*<MarkNav*/}
              {/*  className="article-menu"*/}
              {/*  source={props.article_content}*/}
              {/*  ordered={false}*/}
              {/*/>*/}
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

Detailed.getInitialProps = async (context) =>{
  console.log(context.query.id)
  let id = context.query.id

  const promise = new Promise((resolve)=>{

    axios(servicePath.getArticleById+id).then(
      (res)=>{
        console.log(res.data)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}

export default Detailed