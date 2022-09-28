import './App.css';
import TopBar from './componets/TopBar'
import Background from './componets/Background'
import StoreListings from './componets/StoreListings'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;