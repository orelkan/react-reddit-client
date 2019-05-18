/** @jsx jsx */
import { useState } from 'react';
import { Global, jsx, css } from "@emotion/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/styles";
import red from '@material-ui/core/colors/red';
import SubReddit from './SubReddit';
import AppBarAndDrawer from './AppBarAndDrawer';

const content = css`
  margin-top: 5em;
`;

const darkColor = '#181a1b';

function App() {
  const [subreddit, setSubreddit] = useState('all');
  const [themeVariant, setThemeVariant] = useState('light');

  function handleSubChange(event) {
    setSubreddit(event.target.value);
  }

  const theme = createMuiTheme({
    palette: {
      primary: {main: red[800]},
      type: themeVariant
    },
    typography: {
      useNextVariants: true,
    },
  });

  const bgColor = themeVariant === 'dark' ? darkColor : 'inherit';
  const global = css`
    body {
      margin: 0;
      background: ${bgColor};
    }
  `;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Global styles={global}/>
        <AppBarAndDrawer onSubredditChange={handleSubChange} 
          onSelection={setThemeVariant}/>
        <div css={content}>
          <SubReddit subreddit={subreddit}/>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
