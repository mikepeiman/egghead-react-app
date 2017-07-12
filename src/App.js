import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {a: ''}
  }
  update(e) {
    this.setState({
      a: this.a.refs.message.value, 
      // the refs of "a" component and the value of "message" element
      // if node is not nested you can use
      // a: ReactDOM.findDOMNode(this.a).value,
      b: this.b.value 
      // if using simple ref in component ref="b"
      // b: this.refs.b.value
    })
  }
  render() {
    return (
      <div>
       <Widget 
        ref={ component => this.a = component } // ref="a"
        update={this.update.bind(this)}
      /> {this.state.a}
      <hr />
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> Icon
      <hr />
      <input 
      ref={ node => this.b = node } // ref="b"
        type="text" 
        onChange={this.update.bind(this)}
      /> {this.state.b}
      </div>
    )
  }
}

class Widget extends React.Component {
  render() {
    return (
      <div>
      <input ref="message" type="text" onChange={this.props.update} />
      
      </div>
    )
  }
}
export default App