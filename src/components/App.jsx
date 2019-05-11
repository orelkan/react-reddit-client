import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SubReddit from './SubReddit';
import AppBar from './AppBar';
import './Reddit.css';

const theme = createMuiTheme({
  palette: {
    primary: {main: red[800]}
  }
});

function App() {
  const [subreddit, setSubreddit] = useState("all");
  function handleSubChange(event) {
    setSubreddit(event.target.value)
  }
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar onSubredditChange={handleSubChange}/>
      <div className='content'>
        <SubReddit subreddit={subreddit}/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
