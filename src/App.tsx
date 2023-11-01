import React, { useEffect, useState } from "react";
import Logout from './components/login/logout';
import { Button } from "./components/Button";
import { Game } from "./components/Game";
import { gapi  } from 'gapi-script';

import "./App.less";
import LogIn from "./components/login/login";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.apps.googleusercontent.com";

  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: cid,
        scope: "",
      });
    }
    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>2048 with Friends!</h1>
        </div>
        <div></div>
        <div>
        <LogIn />
        </div>
        <div>
        <Logout />
        </div>
        <div>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
      <div>
      </div>
    </div>
  );
};
/* eslint-enable react/jsx-no-target-blank */
