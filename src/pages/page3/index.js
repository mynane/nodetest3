import React, { Component } from 'react';
import { Button, notification } from 'antd';
import './index.scss';

const openNotification = function () {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default class Page3 extends Component {
  render() {
    return (
          <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    );
  }
}