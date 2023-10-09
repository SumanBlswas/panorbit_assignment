import { Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ id }: { id: string }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveLink = () => {
    if (currentPath.includes("/homepage/posts")) {
      return "Posts";
    } else if (currentPath.includes("/homepage/gallery")) {
      return "Gallery";
    } else if (currentPath.includes("/homepage/todo")) {
      return "ToDo";
    }
    return "Profile";
  };

  const [activeLink, setActiveLink] = useState(getActiveLink());

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

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
        <Link to={`/homepage/${id}`} onClick={() => handleLinkClick("Profile")}>
          <Text
            color={activeLink === "Profile" ? "white" : "whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Profile
          </Text>
        </Link>
        <Divider />
        <Link
          to={`/homepage/posts/${id}`}
          onClick={() => handleLinkClick("Posts")}
        >
          <Text
            color={activeLink === "Posts" ? "white" : "whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Posts
          </Text>
        </Link>
        <Divider />
        <Link
          to={`/homepage/gallery/${id}`}
          onClick={() => handleLinkClick("Gallery")}
        >
          <Text
            color={activeLink === "Gallery" ? "white" : "whiteAlpha.600"}
            fontWeight={"semibold"}
            fontSize={"lg"}
          >
            Gallery
          </Text>
        </Link>
        <Divider />
        <Link
          to={`/homepage/todo/${id}`}
          onClick={() => handleLinkClick("ToDo")}
        >
          <Text
            color={activeLink === "ToDo" ? "white" : "whiteAlpha.600"}
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
