import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';

function App() {
  return (
    <>
      <Navbar title="Campus Rescruitment System"></Navbar>
      <div className='container'>
        <Login></Login>
      </div>

    </>
  );
}

export default App;
