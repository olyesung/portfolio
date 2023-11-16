import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootHome from "./Routes/RootHome";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<RootHome />} />
      </Routes>
    </Router>
  );
}

export default App;
