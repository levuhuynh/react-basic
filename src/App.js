import logo from './logo.svg';
import './App.css';
import Nav from './View/nav';
import { useState, useEffect } from 'react';
import Todo from './View/Todo';
import Covid from './View/covid';
import { ToastContainer, toast } from 'react-toastify';
import { CountDown, NewCountDown } from './View/countdown';
import Blog from './View/Blog';
import DetailBlog from './View/DetailBlog';
import ListUser from './View/ListUser';
import DetailUser from './View/DetailUser';
import AddNewBlog from './View/AddNewBlog';
import NotFound from './View/NotFound';
import YoutubeSearch from './View/YoutubeSearch';
import Video from './View/Video';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
// import { Tab } from 'bootstrap';


const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Playing game' },
    { id: 'todo2', title: 'Fixing code' },
    { id: 'todo3', title: 'Doing homework' }
  ]);

  const handleEventClick = (event) => {
    if (!input) {
      alert('empty input')
      return
    }

    let newTodo = { id: Math.random() * 100, title: input }
    setTodos([...todos, newTodo])
    setInput('')
  }
  const handleOnChangeInput = (event) => {
    setInput(event.target.value)
  }

  const deleteATodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    alert('time up')
  }

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />

          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <div style={{ fontSize: "30px", marginBottom: "15px" }}>Countdown Timer</div>
              <CountDown />
              <span>--------------</span>
              <NewCountDown onTimesup={onTimesup}
              />
            </Route>
            <Route path="/todo" >
              <Todo
                todos={todos}
                deleteATodo={deleteATodo}
              />
              <input type='text' value={input} onChange={(event) => handleOnChangeInput(event)} style={{ marginTop: "15px", marginBottom: '5px' }} />
              <button type='button' onClick={(event) => handleEventClick(event)}>Add</button>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/search" exact >
              <YoutubeSearch />
            </Route>
            <Route path="/search/:id/:title" >
              <Video />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>


        </header>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}


export default App;
