import './App.css';

import { Container } from './module/Conatiner';
import { Header } from './module/Header';
import { MasterContent } from './module/MasterContent';
import { ServicesBlock } from './module/ServicesBlock';
import { PortfolioBlock } from './module/PortofolioBlock';
import { FooterBlock } from './module/FooterBlock';

function App() {
  return (
    <div className='app'>
      <Container>
        <Header />
        <MasterContent />
        <ServicesBlock />
        <PortfolioBlock />
        <FooterBlock />
      </Container>
    </div>
  )
}

export default App;
