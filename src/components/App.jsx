/** @jsx jsx */
import { useState } from 'react';
import { Global, jsx, css } from "@emotion/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from "@material-ui/styles";
import red from '@material-ui/core/colors/red';
import SubReddit from './SubReddit/SubReddit';
import AppBarAndDrawer from './App/AppBarAndDrawer';
import ExpandProvider from './shared/ExpandProvider';

const content = css`
  margin-top: 4.5em;
`;
const scrollbar = css`
  body::-webkit-scrollbar {
    width: 0.5em;
  }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: #383838;
    outline: 1px solid slategrey;
  }
`;

const darkColor = '#181a1b';
const defaultVariant = localStorage.getItem('theme') || 'dark';

function App() {
  const [subreddit, setSubreddit] = useState('all');
  const [themeVariant, setThemeVariant] = useState(defaultVariant);

  function handleSubChange(event) {
    setSubreddit(event.target.value.trim());
  }

  function setThemeToLocalStorage(newTheme) {
    localStorage.setItem('theme', newTheme);
    setThemeVariant(newTheme);
  }

  const theme = createMuiTheme({
    palette: {
      primary: {main: red[800]},
      secondary: {main: red[300]},
      type: themeVariant
    },
    typography: {
      useNextVariants: true,
    },
  });

  const linkColor = css`
    a {
      color: lightblue;
    }
  `;
  const bgColor = themeVariant === 'dark' ? darkColor : 'inherit';
  const global = css`
    ${scrollbar}
    body {
      margin: 0;
      background: ${bgColor};
    }
    ${themeVariant === 'dark' && linkColor}
  `;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Global styles={global}/>
        <ExpandProvider>
          <AppBarAndDrawer onSubredditChange={handleSubChange} 
            onSelection={setThemeToLocalStorage}/>
          <div css={content}>
            <SubReddit subreddit={subreddit}/>
          </div>
        </ExpandProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

App.whyDidYouRender = true;

export default App;
