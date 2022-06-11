import SearchForm from './components/searchForm';
import ImageCard from './components/imageCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="/" element ={<SearchForm />} />
          <Route path="/ImageCard" element ={<ImageCard />} />          
    </Routes>
    </BrowserRouter>
  );
}
export default App;
