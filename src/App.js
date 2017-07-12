import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }
  componentWillMount() {
    fetch( 'http://swapi.co/api/people/?format=json' )
    .then( response => response.json() )
    .then( ({results: items}) => this.setState({items}))
  }
//   render() {
//     let items = this.state.items
//     return (
//       <div>
//         {items.map(item => 
//           <h4 key={item.name}>{item.name}</h4>)}
//       </div>
//     )
//   }
// }

// export default App
// 
filter(e) {
  this.setState({filter: e.target.value})
}

  render() {
    let items = this.state.items
    if(this.state.filter) {
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map(item => 
          <Person key={item.name} person={item} />)}
      </div>
    )
  }
}
const Person = (props) => <h4>{props.person.name}</h4>

export default App
