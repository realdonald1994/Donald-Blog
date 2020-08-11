/**
 * @name: Author
 * @author: Zhongxu(Donald)
 * @date: 10/08/2020 21:59
 * @description：Author
 */

import {Avatar,Divider} from 'antd'

import '../static/style/components/author.css'
const Author = () =>{
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://raw.githubusercontent.com/realdonald1994/blog-resources/master/img/mmexport1492573236965.jpg" /></div>
      <div className="author-introduction">
        Donald, an independent developer, an uncle in the world of 0 and 1; a lifelong learner who vows to learn an infinite loop. Hope to meet friends who can grow together.

        Love programming, like tossing, and are exploring ways to learn programming techniques efficiently ...
        <Divider>Social Media</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
        <Avatar size={28} icon="linkedin" className="account" />
      </div>
    </div>
  )
}

export default Author