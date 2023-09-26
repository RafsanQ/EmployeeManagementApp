
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {

  return (
    <>
      <Header/>
      <div className="container">
        <ListEmployeeComponent/>
      </div>
      <Footer/>
    </>
  )
}

export default App
