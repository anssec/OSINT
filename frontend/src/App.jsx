import { Route, Routes } from "react-router-dom";
import Main from "./Home/Main";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      {/* Page Not found */}
    </Routes>
  );
};

export default App;
