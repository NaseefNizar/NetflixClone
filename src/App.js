import './App.css'
import { originals,action,horror,romance } from './urls';
import NavBar from './Components/NavBar/NavBar'; 
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RowPost/RawPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RawPost title="Netflix Originals" url={originals}/>
      <RawPost title='Action' isSmall url={action}/>
      <RawPost title='Horror' isSmall url={horror}/>
      <RawPost title='Romance' isSmall url={romance}/>
      <Footer />
    </div>
  );
}

export default App;
