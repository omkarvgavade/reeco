import {
    Box,
    Grid,
    Text,
    HStack,
    Icon,
    Badge,
  } from "@chakra-ui/react";
  import { MdRestaurantMenu, MdFastfood, MdLocalDining, MdLocalDrink, MdLocalBar, MdLocalCafe, MdLocalPizza, MdLiquor } from "react-icons/md";
  
export const OrdersInfo = ()=> {
    return (
      <Box borderWidth="1px" p="1rem 3rem" mt={4} mb={2} h="8rem" bg="#fff" borderRadius="1rem">
        <Grid templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }} gap={2}>
          <Box colSpan={{ base: 1, md: 2 }}  borderRight="1px solid #E7E7E7" paddingLeft="0.7rem" display="flex" flexDirection="column">
            <Text fontSize="sm" color="gray.500" h="2.5rem" fontWeight={700} textAlign="start">
              Supplier
            </Text>
            <Text fontSize="15px" fontWeight={700} textAlign="start">
              East Coast fruits & vegetables
            </Text>
          </Box>
          <Box colSpan={{ base: 1, md: 2 }}  borderRight="1px solid #E7E7E7" paddingLeft="0.7rem">
            <Text fontSize="sm"  h="2.5rem" color="gray.500" fontWeight={700} textAlign="start">
              Shipping Date
            </Text>
            <Text fontSize="15px" fontWeight={700} textAlign="start">
              Thu, Feb 10
            </Text>
          </Box>
            
          <Box colSpan={{ base: 1, md: 2 }}  borderRight="1px solid #E7E7E7" paddingLeft="0.7rem">
            <Text fontSize="sm"  h="2.5rem" color="gray.500" fontWeight={700} textAlign="start">
              Total
            </Text>
            <Text fontSize="15px" fontWeight={700} textAlign="start">
              $ 15,028.3
            </Text>
          </Box>
  
          <Box colSpan={{ base: 1, md: 2 }}  borderRight="1px solid #E7E7E7" paddingLeft="0.7rem">
            <Text fontSize="sm"  h="2.5rem" color="gray.500" fontWeight={700} textAlign="start">
              Category
            </Text>
            <HStack spacing={1} pt={1} display="grid" gridTemplateColumns="repeat(4, 1fr)" textAlign="start">
              <Badge bg="none">
                <Icon as={MdRestaurantMenu} fontSize="14px" color="teal.500"/>
              </Badge>
              <Badge bg="none" >
                <Icon as={MdFastfood} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none" >
                <Icon as={MdLocalDining} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none" >
                <Icon as={MdLocalDrink} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none">
                <Icon as={MdLocalBar} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none" >
                <Icon as={MdLocalCafe} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none">
                <Icon as={MdLocalPizza} fontSize="14px" color="teal.500" />
              </Badge>
              <Badge bg="none">
                <Icon as={MdLiquor} fontSize="14px" color="teal.500" />
              </Badge>
            </HStack>
          </Box>
          <Box colSpan={{ base: 1, md: 2 }}  borderRight="1px solid #E7E7E7" paddingLeft="0.7rem">
            <Text fontSize="sm"  h="2.5rem" color="gray.500" fontWeight={700} textAlign="start">
              Department
            </Text>
            <Text fontSize="15px" fontWeight={700} textAlign="start">
              300-444-678
            </Text>
          </Box>
          <Box colSpan={{ base: 1, md: 2 }} paddingLeft="0.7rem" >
            <Text fontSize="sm"  h="2.5rem" color="gray.500" fontWeight={700} textAlign="start">
              Status
            </Text>
            <Text fontSize="15px" fontWeight={700} textAlign="start">
              Awaiting your approvel
            </Text>
          </Box>
        </Grid>
      </Box>
    );
  }
  