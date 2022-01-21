
import Header from "./components/Header"
import './App.css'
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Premieres from './components/Premieres';

function App () {
  return (
        <>          
          <Header/>
          <div className="container">          
            <Premieres />
            </div>
        </>
  )
}

export default App