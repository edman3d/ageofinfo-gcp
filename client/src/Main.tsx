import { Routes, Route } from "react-router-dom";
import { CivComparePage, CivDataPage } from "./pages";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CivComparePage />} />
      <Route path="/civdata" element={<CivDataPage />} />
    </Routes>
  );
};
export default Main;
