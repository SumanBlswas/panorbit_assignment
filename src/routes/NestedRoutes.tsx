import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Gallery from "../pages/Gallery";
import ToDo from "../pages/ToDo";
import UserHomePage from "../pages/UserHomePage";

const NestedRoutes = ({ setId }: { setId: CallableFunction }) => {
  return (
    <Routes>
      <Route path="/:id" element={<UserHomePage setId={setId} />} />
      <Route path="posts/:id" element={<Posts setId={setId} />} />
      <Route path="gallery/:id" element={<Gallery setId={setId} />} />
      <Route path="todo/:id" element={<ToDo setId={setId} />} />
    </Routes>
  );
};

export default NestedRoutes;
