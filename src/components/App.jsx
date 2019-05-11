/** @jsx jsx */
import { useState } from 'react';
import { Global, jsx, css } from "@emotion/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/styles";
import red from '@material-ui/core/colors/red';
import SubReddit from './SubReddit';
import AppBar from './AppBar';

const theme = createMuiTheme({
  palette: {
    primary: {main: red[800]}
  },
  typography: {
    useNextVariants: true,
  },
});

const content = css`
  margin-top: 5em;
`;
const global = css`
  body {
    margin: 0
  }
`;

function App() {
  const [subreddit, setSubreddit] = useState("all");
  function handleSubChange(event) {
    setSubreddit(event.target.value)
  }
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Global styles={global}/>
        <AppBar onSubredditChange={handleSubChange}/>
        <div css={content}>
          <SubReddit subreddit={subreddit}/>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
