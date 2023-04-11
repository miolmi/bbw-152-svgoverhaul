import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';
import Home from "./Component/pages/Home";
import Footer from "./Component/layouts/Footer";

function App() {
    return (
        <div className="App">
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;