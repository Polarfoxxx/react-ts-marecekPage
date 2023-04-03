import './App.css';

import { Container } from './module/Conatiner';
import { Header } from './module/Header';
import { MasterContent } from './module/MasterContent';
import { ServicesBlock } from './module/ServicesBlock';

function App() {
  return (
    <div className='app'>
      <Container>
        <Header />
        <MasterContent />
        <ServicesBlock />
      </Container>
    </div>
  )
}

export default App;
