import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import TitleNavbar from "../components/TitleNavbar";

const Posts = ({ setId }: { setId: CallableFunction }) => {
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);
  const page = "Posts";
  return (
    <Flex w={"full"} justify={"center"} flexDir={"column"}>
      <Box pos={"absolute"} w={"75%"} top={14}>
        {id && <TitleNavbar id={id} page={page} />}
      </Box>
      <ComingSoon />
    </Flex>
  );
};

export default Posts;
