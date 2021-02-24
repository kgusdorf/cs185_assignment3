import React, { Component } from 'react';
import TextPage from './TextPage';
import ImagePage from './ImagePage';
import VideoPage from './VideoPage';
import TablePage from './TablePage';
import EmailPage from './EmailPage';

export default class Body extends Component {
  render() {
    let displayContent = () => {
      let activeTab = this.props.activeTab;
      if (activeTab === 1) {
        return <TextPage />;
      } else if (activeTab === 2) {
        return <ImagePage />;
      } else if (activeTab === 3) {
        return <VideoPage />;
      } else if (activeTab === 4) {
        return <TablePage />;
      } else if (activeTab === 5) {
        return <EmailPage />;
      }
    };
    return displayContent();
  }
}
