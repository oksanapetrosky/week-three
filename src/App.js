
import './App.css';
import image from './shopping.jpg'
import imageTwo from './man.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
     <div className='container'>
     <img src={ image } alt='pic' width='200px' />
     </div>
     <div className='container'>
          <h1>Grocery List</h1>
     </div> 
     <GroceryList />
    <div className='container'>
          <img src={ imageTwo } alt='pic2' width='200px' />
     </div>
    </div>
  );
}

export default App;
