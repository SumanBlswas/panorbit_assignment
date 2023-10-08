import { Box, Flex, Text } from "@chakra-ui/react";
import { Users } from "../config/types";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

const Address = ({ data }: { data: Users }) => {
  const arrayAddress = [
    { text: "Street", prop: data.address.street },
    { text: "Suite", prop: data.address.suite },
    { text: "City", prop: data.address.city },
    { text: "Zipcode", prop: data.address.zipcode },
  ];

  return (
    <Box>
      <Flex flexDir={"column"} fontSize={"2xl"} fontWeight={"semibold"}>
        <Text textAlign={"left"} color={"blackAlpha.600"}>
          Address:
        </Text>
        <Flex flexDir={"column"} gap={2} flexWrap={"wrap"}>
          {arrayAddress.map((el, index) => (
            <Flex
              key={index}
              justifyContent="center"
              gap={5}
              placeItems={"center"}
            >
              <Text
                flex={1}
                textAlign={"right"}
                color={"blackAlpha.600"}
                fontSize={"lg"}
              >
                {el.text}
              </Text>
              <Text>:</Text>
              <Text flex={5} textAlign={"left"} color={"blackAlpha.800"}>
                {el.prop}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box zIndex={3}>
          <Map
            lat={Number(data.address.geo.lat.replace("hotlink-ok", ""))}
            lng={Number(data.address.geo.lng.replace("hotlink-ok", ""))}
          />
        </Box>
        <Flex
          gap={3}
          placeItems={"center"}
          justify={"right"}
          fontSize={"md"}
          mt={5}
        >
          <Flex gap={2} placeItems={"center"}>
            <Text color={"blackAlpha.600"} fontSize={"sm"}>
              Lat:
            </Text>
            <Text>{data.address.geo.lat}</Text>
          </Flex>
          <Flex gap={2} placeItems={"center"}>
            <Text color={"blackAlpha.600"} fontSize={"sm"}>
              Long:
            </Text>
            <Text>{data.address.geo.lng.replace("hotlink-ok", "")}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Address;
