import { Avatar, Box, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Users } from "../config/types";
import { getUsers } from "../api/getUser";
import { RxCross2 } from "react-icons/rx";
import { BiSolidSend } from "react-icons/bi";

const Chat = ({ id }: { id: string }) => {
  const [data, setData] = useState<Users[]>([]);
  const [open, setOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const [openSub, setOpenSub] = useState(false);
  const [currentUser, setCurrentUser] = useState<Users>();

  useEffect(() => {
    getUsers()
      .then((users) => {
        const notUsers = users.filter((user: Users) => user.id !== Number(id));
        setData(notUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const closeChat = () => {
    setOpen(false);
    setOpenSub(false);
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        closeChat();
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleChatClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Box onClick={handleChatClick}>
      <Box
        pt={3}
        pb={3}
        w={"300px"}
        borderTopRadius={14}
        cursor={"pointer"}
        ref={chatRef}
      >
        <Flex
          justify={"space-between"}
          placeItems={"center"}
          color={"#fff"}
          bgColor={"#2c65c8"}
          p={4}
          borderTopRadius={"14"}
        >
          <Flex placeItems={"center"} gap={3}>
            <Text fontSize={"2xl"}>
              <BsChatRight />
            </Text>
            <Text fontSize={"xl"}>Chats</Text>
          </Flex>
          <Text fontSize={"3xl"}>
            <MdKeyboardArrowUp />
          </Text>
        </Flex>
        <Box
          h={"xs"}
          overflow={"scroll"}
          overflowX={"hidden"}
          display={open ? "flex" : "none"}
          flexDir={"column"}
          gap={3}
          bg={"#fff"}
          color={"#000"}
          p={5}
          onClick={handleContentClick}
        >
          {data &&
            data.map((user, index) => (
              <Flex
                placeItems={"center"}
                justifyContent={"space-between"}
                key={index}
              >
                <Box
                  display={"flex"}
                  gap={3}
                  justifyContent={"center"}
                  borderRadius={"20px"}
                  onClick={() => {
                    setCurrentUser(user);
                    setOpenSub(true);
                  }}
                >
                  <Avatar
                    name={user.name}
                    src={user.profilepicture}
                    size={"sm"}
                  />
                  <Text fontSize={"md"}>{user.name}</Text>
                </Box>
                <Box
                  bg={"#1FAD62"}
                  borderRadius={"100%"}
                  h={"9px"}
                  w={"9px"}
                ></Box>
              </Flex>
            ))}
        </Box>
      </Box>
      {/* subChat section ----> */}
      <Box
        pt={3}
        pb={3}
        w={"300px"}
        borderTopRadius={14}
        cursor={"pointer"}
        ref={chatRef}
        pos={"absolute"}
        top={14}
        right={80}
        display={openSub ? "block" : "none"}
        onClick={handleContentClick}
      >
        <Flex
          justify={"space-between"}
          placeItems={"center"}
          color={"#fff"}
          bgColor={"#2c65c8"}
          p={4}
          borderTopRadius={"14"}
        >
          <Flex placeItems={"center"} gap={3}>
            <Text fontSize={"2xl"}>
              <Avatar
                name={currentUser?.name}
                src={currentUser?.profilepicture}
                size={"sm"}
              />
            </Text>
            <Text fontSize={"md"}>{currentUser?.name}</Text>
          </Flex>
          <Flex placeItems={"center"}>
            <Text fontSize={"3xl"}>
              <MdKeyboardArrowDown />
            </Text>
            <Text fontSize={"xl"} onClick={() => setOpenSub(false)}>
              <RxCross2 />
            </Text>
          </Flex>
        </Flex>
        <Box
          h={"210px"}
          overflow={"scroll"}
          overflowX={"hidden"}
          display={open ? "flex" : "none"}
          flexDir={"column"}
          gap={3}
          bg={"#fff"}
          color={"#000"}
          p={5}
          pt={3}
        >
          <Flex flexDir={"column"} gap={2} fontSize={"sm"}>
            <Text p={2} bg={"blackAlpha.200"}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
            <Text p={2} bg={"blackAlpha.200"}>
              Lorem ipsum dolor
            </Text>
            <Text p={2} bg={"blackAlpha.200"} textAlign={"right"}>
              Lorem ipsum dolor
            </Text>
            <Text p={2} bg={"blackAlpha.200"} textAlign={"right"}>
              Lorem ipsum
            </Text>
          </Flex>
        </Box>
        <Flex
          placeItems={"center"}
          justify={"space-between"}
          gap={5}
          ml={5}
          mt={3}
        >
          <Input type={"text"} />
          <Text fontSize={"2xl"} color={"#2c65c8"}>
            <BiSolidSend />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Chat;
