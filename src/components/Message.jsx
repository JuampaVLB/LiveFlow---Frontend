import React from 'react'
import styles from '../modules/Message.module.css'; 

function Message(props) {
  return (
    <li>
        <p className={
          `${props.from === "Me" ? styles.Me : styles.Server}`
          }>{props.from}: {props.message}</p>
    </li>
  )
}

export default Message;