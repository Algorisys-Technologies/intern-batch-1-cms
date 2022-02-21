import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TextEditor from "./components/TextEditor";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostView from "./components/PostView";
import Dashboard from "./components/Dashboard";
import Draft from "./components/Draft";
import Blog from "./components/Blog.jsx";
import CreateBlog from "./components/CreateBlog";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/createpost">
            <TextEditor />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/viewdraft">
            <Draft />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/viewpost">
            <PostView />
          </Route>
          <Route exact path="/createblog">
            <CreateBlog />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
