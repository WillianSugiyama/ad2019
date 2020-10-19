import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import colors from './__vars__/colors';
import Header from './components/structure/Header';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${colors.PRIMARY};
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: ${colors.QUINARY};
  }

  *,*:focus,*:hover{
    outline:none;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

ReactDOM.render(
  <div>
    <GlobalStyles/>
    <Header title="Aplicação de sorteio" />
    <App/>
  </div>,
  document.getElementById('root')
);
