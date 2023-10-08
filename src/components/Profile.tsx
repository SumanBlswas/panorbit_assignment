import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Users } from "../config/types";

const Profile = ({ data }: { data: Users }) => {
  const arrayProfile = [
    { text: "Username", prop: data.username },
    { text: "e-mail", prop: data.email },
    { text: "Phone", prop: data.phone },
    { text: "Website", prop: data.website },
  ];

  const arrayCompany = [
    { text: "Name", prop: data.company.name },
    { text: "catchprase", prop: data.company.catchPhrase },
    { text: "bs", prop: data.company.bs },
  ];
  return (
    <Box>
      <Flex
        flexDir={"column"}
        placeItems={"center"}
        gap={3}
        fontSize={"xl"}
        fontWeight={"semibold"}
      >
        <Avatar name={data.name} src={data.profilepicture} boxSize={"15rem"} />
        <Flex gap={3} flexDir={"column"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"} textAlign={"center"}>
            {data.name}
          </Text>
          <Flex flexDir={"column"} gap={2}>
            {arrayProfile.map((el, index) => (
              <Flex key={index} justifyContent="center" gap={3}>
                <Text
                  flex={1}
                  textAlign={"right"}
                  fontSize={"xl"}
                  fontWeight={"medium"}
                  color={"blackAlpha.600"}
                >
                  {el.text}
                </Text>
                <Text>:</Text>
                <Text flex={2} textAlign={"left"} color={"blackAlpha.800"}>
                  {el.prop}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Divider borderBottomColor={"black"} borderBottomWidth={"1px"} />
          <Text
            fontSize={"2xl"}
            fontWeight={"semibold"}
            textAlign={"center"}
            color={"blackAlpha.600"}
          >
            Company
          </Text>
          <Flex flexDir={"column"} gap={2}>
            {arrayCompany.map((el, index) => (
              <Flex key={index} gap={3}>
                <Text
                  flex={1}
                  textAlign={"right"}
                  fontSize={"lg"}
                  fontWeight={"medium"}
                  color={"blackAlpha.600"}
                >
                  {el.text}
                </Text>
                <Text>:</Text>
                <Text flex={2} textAlign={"left"} color={"blackAlpha.800"}>
                  {el.prop}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
