import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './css/main.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Footer from './components/Footer';

//import {bindActionCreators} from 'redux';
//import store from './store';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo React App with Redux</h1>
        </header>
        <Router>
          <div className="Todo-App">
            <TodoForm />
            <Filter />
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter}/>
            )}>
            </Route>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
/*
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch);
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
*/
/*
export default connect(
  (state) => state,
  {updateCurrent}
)(App)
*/
