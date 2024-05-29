import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Histogram from "./components/Pages/Histogram";
import WordCloud from "./components/Pages/WordCloud";

function App() {
  // const [postCount, setPostCount] = useState([])
  // const [randomPost, setRandomPost] = useState([])

  // useEffect(() => {
  //   getPostCount().then((postCount) => setPostCount(postCount));
  //   getRandomPost().then((randomPost) => setRandomPost(randomPost));
  // }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Histogram' element={<Histogram />} />
          <Route exact path='/WordCloud' element={<WordCloud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
