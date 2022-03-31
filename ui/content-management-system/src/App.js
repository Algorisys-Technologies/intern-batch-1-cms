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
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import Post from "./components/Post";
import ChangePassword from "./components/ForgotPassword2";
import ForgotPassword from "./components/ForgotPassword1";
import UpdatePostContent from "./components/updatePostContent";
import MyPosts from "./components/MyPosts";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App" style={{ minHeight: "47.7vh" }}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/createpost">
            <TextEditor />
          </Route>
          <Route exact path="/myposts">
            <MyPosts />
          </Route>
          <Route exact path="/updatepost">
            <UpdatePostContent />
          </Route>
          <Route path="/changepassword">
            <ChangePassword />
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
          <Route exact path="/postContent">
            <Post />
          </Route>
          <Route exact path="/createblog">
            <CreateBlog />
          </Route>
          <Route exact path="/postContent">
            <Post />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/updatepost">
            <UpdatePostContent />
          </Route>
          <Route path="/ForgotPassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/resetPassword">
            <ChangePassword />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
