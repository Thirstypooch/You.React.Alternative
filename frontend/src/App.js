import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Slide from './components/Slide'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />
        <main className='py-3' style={{ background: '#FCF3E8' }}>
          <Container style={{ background: '#FCF3E8' }}>
            <Slide />
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;
