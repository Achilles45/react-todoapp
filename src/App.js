//Bring in React Router stuffs here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Bring in our components
import Navbar from "./components/Layouts/Navbar";
import Home from "./components/Pages/Home"
import AddTodo from "./components/Pages/AddTodo";
import AllTodos from "./components/Pages/AllTodos";
import ReadSingleTodo from "./components/TodosComponents/ReadSingleTodo";
import NotFound from "./components/Layouts/NotFound";


//Bring in provider
import { Provider } from './components/Context/todoContext'
function App() {
  return (
   <Provider>
      <Router>
      <div className="App">
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/add-todo" component={ AddTodo } />
            <Route exact path="/all-todos" component={ AllTodos } />
            <Route exact path="/todos/:id" component={ ReadSingleTodo } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
