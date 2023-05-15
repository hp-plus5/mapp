import './App.scss';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Mapp from './Mapp/Mapp';

function App() {
  return (
    <div className="app">
      <Mapp />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
