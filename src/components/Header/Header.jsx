import React, { Component } from 'react'
import styles from './Header.module.scss';
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}><h1>Header</h1></div>
    )
  }
}
