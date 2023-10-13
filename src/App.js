import './App.css';
import Navbar from './components2/navbar';
import Navbar2 from './components2/navbar2';
import Slider from './components2/slider';
import './css/bootstrap.css';
import Form from './components2/Form.js'


/*
function App() {
  return (
    <>
    <div class="container-fluid">
      <div class="row nav1">
        <Navbar/>
      </div>
      <div class="row justify-content-center nav2">
       <Navbar2/>
      </div>
      <div class="row">
       <Slider/>
      </div>
    </div>
    </>
  );
}*/

function App() {
  return (
    <>
      <div class='form'>
        <Form />
      </div>
    </>
  );
}

export default App;