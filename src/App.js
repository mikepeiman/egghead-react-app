import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
        <div className="childC"></div>
      </Parent>

    )
  }
}

class Parent extends React.Component {
  render() {
    // console.log(this.props.children)
    // let items = React.Children
    // .map(this.props.children, child => child)
    // ... or:
    // let items = React.Children.toArray(this.props.children)
    // let items = React.Children
    // .forEach(this.props.children, child => console.log(
    //   child.props.className)) 
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App