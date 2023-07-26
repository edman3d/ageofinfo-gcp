import { Routes, Route } from "react-router-dom";
import CivComparePage from "./pages/CivComparePage";
import CivDataPage from "./pages/CivDataPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CivComparePage />} />
      <Route path="/civdata" element={<CivDataPage />} />
    </Routes>
  );
};
export default Main;
