import React, { Component } from 'react'
import styles from './Content.module.scss';
export default class Content extends Component {
  render() {
    return (
      <div className={styles.content}><h2>Content</h2></div>
    )
  }
}
