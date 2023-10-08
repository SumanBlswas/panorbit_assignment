import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NestedRoutes from "../routes/NestedRoutes";
import { useState } from "react";

const HomePage = () => {
  const [id, setId] = useState("");
  return (
    <Box p={"48px"}>
      <Flex placeItems={"center"} gap={14}>
        <Navbar id={id} />
        <NestedRoutes setId={setId} />
      </Flex>
    </Box>
  );
};

export default HomePage;
