import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
// import Feed from "./Components/Feed";
// import Widgets from "./Components/Widgets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Lists from "./Pages/Lists";
import Home from "./Pages/Home";
import Bookmarks from "./Pages/Bookmarks";
import Messages from "./Pages/Messages";
import More from "./Pages/More";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";

function App() {
  const [islogedin, setIslogedin] = useState(true);

  return (
    <div className="app">
      <Router>
        {/* Side Bar */}
        {/* <Sidebar /> */}

        {/* Feed */}
        {/* <Feed /> */}

        {/* Widgets */}
        {/* <Widgets /> */}

        <Sidebar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" exact component={Explore}></Route>
          <Route path="/lists" exact component={Lists} />
          <Route path="/bookmarks" exact component={Bookmarks} />
          <Route path="/messages" exact component={Messages} />
          <Route path="/more" exact component={More} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
