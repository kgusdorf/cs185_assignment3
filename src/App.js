import './App.css';
import TabList from './component/TabList';
import Body from './component/Body';
import ScrollTopButton from './component/ScrollTopButton';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 1,
    };
    this.changeTab = (id) => {
      this.setState({
        active: id,
      });
    };
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: 'Text',
      },
      {
        id: 2,
        title: 'Images',
      },
      {
        id: 3,
        title: 'Video',
      },
      {
        id: 4,
        title: 'Table',
      },
      {
        id: 5,
        title: 'Email',
      },
    ];
    return (
      <div className="App">
        <div className="nav">
          <TabList tabs={tabs} activeTab={this.state.active} changeTab={this.changeTab} />
        </div>
        <div className="main-body">
          <Body activeTab = {this.state.active}/>
        </div>
        <ScrollTopButton/>
      </div>
    );
  }
}

export default App;
