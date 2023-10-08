import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ComingSoon from "../components/ComingSoon";
import HomePage from "../pages/Homepage";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path="/homepage/*" element={<HomePage />} />
        <Route path={"*"} element={<ComingSoon />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
