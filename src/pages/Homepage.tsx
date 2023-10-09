import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NestedRoutes from "../routes/NestedRoutes";
import { useState } from "react";
import Chat from "../components/Chat";

const HomePage = () => {
  const [id, setId] = useState("");
  // const [open, setOpen] = useState(false);
  return (
    <Box p={"48px"}>
      <Flex placeItems={"center"} gap={14}>
        <Flex placeItems={"center"} gap={14}>
          <Navbar id={id} />
          <NestedRoutes setId={setId} />
        </Flex>
        <Box position={"absolute"} bottom={-10} right={14} zIndex={7}>
          <Chat id={id} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
