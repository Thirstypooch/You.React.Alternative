import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Slide from './components/Slide'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
        <main className='py-3' style={{ background: '#FCF3E8' }}>
          <Container style={{ background: '#FCF3E8' }}>
            <Slide />
            <HomeScreen/>
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;
