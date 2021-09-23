import React, { Suspense } from "react";

//Bring in React Router stuffs here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Bring in our components
import Navbar from "./components/Layouts/Navbar";

//Bring in provider
import { Provider } from './components/Context/todoContext'

//Bring in loading component
// import LoadingFallback from "./components/Layouts/LoadingFallback";

//Lazy load some components
const Home = React.lazy(() => import('./components/Pages/Home'));
const About = React.lazy(() => import('./components/Pages/About'));
const AddTodo = React.lazy(() => import('./components/Pages/AddTodo'));
const AllTodos = React.lazy(() => import('./components/Pages/AllTodos'));
const ReadSingleTodo = React.lazy(() => import('./components/TodosComponents/ReadSingleTodo'));
const NotFound = React.lazy(() => import('./components/Layouts/NotFound'));

function App() {
  return (
   <Provider>
      <Router>
      <div className="App">
      <Navbar />
        <div className="container">
          <Switch>
            { /*  Implement code spliting for all routes */ }
            <Suspense fallback={ <p>Loading Component</p> }>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/add-todo" component={ AddTodo } />
              <Route exact path="/all-todos" component={ AllTodos } />
              <Route exact path="/todos/:id" component={ ReadSingleTodo } />
            </Suspense>
            <Route component={ NotFound } />
          </Switch>
        </div>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
