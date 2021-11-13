import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from"./Components/page1" 
import Page2 from"./Components/page2" 
import Page3 from"./Components/page3"
import Form from"./Components/Form"  
import "./App.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="form" element={<Form />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            <li><Link to="form">FORM</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
