import { useState } from 'react';
import './assets/styles/main.scss';
import { Background } from './components/Background.jsx';
import { Container } from './components/Container.jsx';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Background>
        <Container>
          <Header />
        </Container>
      </Background>
    </>
  );
}

export default App;
