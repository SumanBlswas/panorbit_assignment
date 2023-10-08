import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Users } from "../config/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers } from "../api/getUser";
import Profile from "../components/Profile";
import Address from "../components/Address";

const UserHomePage = ({ setId }: { setId: CallableFunction }) => {
  // const location = useLocation();
  // const selectedUser = location.state?.selectedUser || null;

  const { id } = useParams();
  const [data, setData] = useState<Users | null>(null);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        const notUsers = users.filter((user: Users) => user.id !== Number(id));
        setUsers(notUsers);
        const user = users.find((user: Users) => user.id === Number(id));
        setData(user);
        setId(user.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, setId]);

  const navigate = useNavigate();

  console.log(data);

  return (
    <Flex w={"full"} gap={5} flexDir={"column"}>
      <Flex flexDir={"column"} gap={5}>
        <Flex placeItems={"center"} justify={"space-between"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Profile
          </Text>
          {data && (
            <Menu>
              <MenuButton>
                <Flex gap={5} placeItems={"center"}>
                  <Avatar
                    name={data.name}
                    src={data.profilepicture}
                    size={"md"}
                  />
                  <Text fontSize={"xl"}>{data.name}</Text>
                </Flex>
              </MenuButton>
              <MenuList
                p={12}
                borderRadius={24}
                boxShadow={
                  "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
                }
                zIndex={5}
              >
                <MenuItem
                  display={"flex"}
                  justifyContent={"center"}
                  flexDir={"column"}
                  borderRadius={"20px"}
                  gap={2}
                >
                  <Avatar
                    name={data.name}
                    src={data.profilepicture}
                    size={"xl"}
                  />
                  <Box>
                    <Text fontSize={"xl"}>{data.name}</Text>
                    <Text fontSize={"lg"} color={"blackAlpha.600"}>
                      {data.email}
                    </Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <Box h={32} overflow={"scroll"} overflowX={"hidden"}>
                  {users &&
                    users.map((user, index) => (
                      <MenuItem
                        display={"flex"}
                        gap={3}
                        justifyContent={"center"}
                        borderRadius={"20px"}
                        key={index}
                        onClick={() => navigate(`/homepage/${user.id}`)}
                      >
                        <Avatar
                          name={user.name}
                          src={user.profilepicture}
                          size={"sm"}
                        />
                        <Text fontSize={"md"}>{user.name}</Text>
                      </MenuItem>
                    ))}
                </Box>
                <Flex justify={"center"} mt={5}>
                  <Button
                    colorScheme={"red"}
                    borderRadius={"full"}
                    fontSize={"xl"}
                    onClick={() => navigate("/")}
                  >
                    Sign out
                  </Button>
                </Flex>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Divider borderBottomWidth={"1px"} borderColor={"black"} />
      </Flex>
      <Box>
        {data && (
          <Flex flexDir={"row"} placeItems={"center"} gap={20}>
            <Profile data={data} />
            <Divider orientation={"vertical"} h={"2xl"} borderColor={"black"} />
            <Address data={data} />
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default UserHomePage;
