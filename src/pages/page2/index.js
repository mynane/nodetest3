import React, { Component } from 'react';
import { Alert } from 'antd';
import './index.scss';

export default class Page2 extends Component {
  render() {
    return (
      <div>
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
      </div>
    );
  }
}