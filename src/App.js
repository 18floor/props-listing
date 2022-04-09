import './App.css';
import {etsyData} from "./data/Etsy";
import Listing from "./components/Listing";

function App() {
  const items = JSON.parse(etsyData).filter((item) => item.state === 'active');
  return <Listing items={items}/>;
}

export default App;
