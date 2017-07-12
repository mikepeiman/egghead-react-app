import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('root'))
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
    console.log('after setState: ' + this.props.val)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.val % 5 === 0) {
      console.log('next props = ' + nextProps.val);
      return nextProps.val;
    }
  }
  

  render() {
    console.log(this.state.increasing)
    return (
        <button onClick={this.update.bind(this)}>
          {this.props.val}
        </button>
      )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prev props: ' + prevProps.val)
    // doesn't work: console.log('prev props: ${prevProps.val}')
  }
}

App.defaultProps = {val: 0}

export default App