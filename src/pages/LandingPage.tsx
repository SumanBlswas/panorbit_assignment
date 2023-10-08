import { Avatar, Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Users } from "../config/types";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api/getUser";

const LandingPage = () => {
  const [data, setData] = useState<Users[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((users) => setData(users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      bgImg={"/wave-haikei3.svg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      height={"100vh"}
    >
      <Center pt={36}>
        <Box
          w={"container.sm"}
          bgColor={"#f6f6f6"}
          borderRadius={"24px"}
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"#545454"}
            textAlign={"center"}
            p={10}
          >
            Select an account
          </Text>
          <Box p={2} pt={5} pb={6} bgColor={"#fff"} borderBottomRadius={"24px"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={3}
              pl={8}
              pr={8}
              h={"md"}
              overflow={"scroll"}
              overflowX={"hidden"}
              borderRadius={"10px"}
            >
              {data &&
                data.map((user, index) => (
                  <Flex
                    key={index}
                    flexDir={"column"}
                    gap={3}
                    cursor={"pointer"}
                    onClick={() => {
                      navigate(`/homepage/${user.id}`, {
                        // state: { selectedUser: user },
                      });
                    }}
                  >
                    <Flex placeItems={"center"} gap={5}>
                      <Avatar
                        name={user.name}
                        src={user.profilepicture}
                        size={"sm"}
                      />
                      <Text fontSize={"xl"} color={"rgb(74,74,74)"}>
                        {user.name}
                      </Text>
                    </Flex>
                    <Divider
                      borderColor={"rgb(227,227,227)"}
                      borderBottomWidth={"1.5px"}
                    />
                  </Flex>
                ))}
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default LandingPage;
