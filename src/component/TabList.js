import React, { Component } from 'react';
import Itab from './Itab';

export default class TabList extends Component {
  render() {
    return this.props.tabs.map((tab) => (
      <Itab key={tab.id} out={tab} activeTab={this.props.activeTab} changeTab={this.props.changeTab} />
    ));
  }
}
