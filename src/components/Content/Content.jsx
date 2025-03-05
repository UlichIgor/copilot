import React, { Component } from 'react'
import styles from './Content.module.scss';
import Images from '../../images/poster.png';
export default class Content extends Component {
  render() {
    return (
      <div className={styles.content}><h2>Content</h2>
        <img className={styles.images} src={Images} alt="poster" />
      </div>
    )
  }
}
