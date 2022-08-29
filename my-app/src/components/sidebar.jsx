import React from'react';
import {Link} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import '../App.css';

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>userHomepage</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/:id",
      sidebar: () => <div>userProfile</div>,
      main: () => <h2>Profile</h2>
    },
    {
      path: "/",
      sidebar: () => <div>déconnexion</div>,
      main: () => <h2>Déconnection</h2>
    }
  ];

export default function Sidebar() {
    return (
      <Router>
        <div>
          <div>
            <ul >
              <li>
                <Link to="../userHomepage">Home</Link>
              </li>
              <li>
                <Link to="./profil">Profile</Link>
              </li>
              <li>
                <Link to="/">Déconnection</Link>
              </li>
            </ul>
  
            <Routes>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Routes>
          </div>
  
          <div>
            <Routes>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }