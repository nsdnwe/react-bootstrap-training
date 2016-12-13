import styles from './index.scss';
import '../global/styles.css';
import React from 'react';
import EditBook from './editBook'

export default class App extends React.Component {
  render() {
    return (
      <EditBook />
    )
  }
}
