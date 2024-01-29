import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from "./components/shared/Loader";


const Home = lazy(() => import("./pages/home/Home"));
const Footer=lazy(()=>import("./components/shared/Footer"))
const SecondPage=lazy(()=>import("./pages/secondpage/SecondPage"))
const DataNotFound=lazy(()=>import("./pages/error/DataNotFound"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondpage" element={<SecondPage/>} />
          <Route path="*" element={<DataNotFound/>}/>
        </Routes>
        <Footer/>
      </Suspense>
      
    </Router>
  );
};

export default App;
