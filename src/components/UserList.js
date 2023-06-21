/*eslint-disable*/

import React from 'react'
import './ArticleRecord.css';
const UserNames = ({ user }) => {
  return (
    <section className="section">
    <div className="container-main">
    <div className="content">
    <div className="aside">
      <div className="aside-left" style={{ flex: 5 }}>
        <div className="title">{user.name.title} {user.name.first} {user.name.last}</div>
</div>
</div></div></div></section>
  )
}

export default UserNames