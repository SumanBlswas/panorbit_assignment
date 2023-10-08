import { Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({ id }: { id: string }) => {
  return (
    <Flex
      bgGradient={"linear(to bottom, #395bc8, #6039c8)"}
      p={20}
      h={"container.md"}
      borderRadius={"24px"}
    >
      <Flex
        flexDirection={"column"}
        gap={5}
        justify={"center"}
        align={"center"}
      >
        <Link to={`/homepage/${id}`}>
          <Text
            color={"whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Profile
          </Text>
        </Link>
        <Divider />
        <Link to={`/homepage/posts/${id}`}>
          <Text
            color={"whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Posts
          </Text>
        </Link>
        <Divider />
        <Link to={`/homepage/gallery/${id}`}>
          <Text
            color={"whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Gallery
          </Text>
        </Link>
        <Divider />
        <Link to={`/homepage/todo/${id}`}>
          <Text
            color={"whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            ToDo
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
