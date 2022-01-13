import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title = "TextUtils"/>
      <div className="container">
      <Textform title = "Enter here"/>
      </div>
    </>
    
  );

  }
export default App;
