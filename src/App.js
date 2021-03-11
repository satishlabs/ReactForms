
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './books/AddBook';


class App extends Component{
  render(){
    return(
      <div className="card">
       <div className="card-header">
       <h1 className="text-center">Welcome to Satish Labs</h1>
       </div>
        <div className="card-body">
          <AddBook />
        </div>
      </div>
    )
  }
}

export default App;
