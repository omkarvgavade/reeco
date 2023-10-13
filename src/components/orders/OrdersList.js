import {
    Box,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Tooltip,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
  import {FiPrinter} from 'react-icons/fi'
//   import { useAppSelector } from "../../app/hooks";
//   import useProducts from "../../hooks/useProducts";
//   import ProductTable from "../product-table";
  
  export const OrdersList = () => {
    // const { isLoading } = useProducts();
    // const products = useAppSelector((state) => state.product.product);
  
    function print() {
      window.print();
    }
  
    return (
      <Box borderWidth="1px" p={3}>
        <Stack
          direction={{ base: "column", sm: "row", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          pb={3}
        >
          <InputGroup size="sm" maxWidth="500px" borderRadius="full">
            <Input
              placeholder="Search..."
              colorScheme="teal"
            />
            <InputRightElement>
              <IconButton
                colorScheme="teal"
                aria-label="Search"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
  
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button variant="outline" colorScheme="teal">
              Add Item
            </Button>
            <Tooltip label="Print">
              <IconButton
                colorScheme="teal"
                aria-label="Print"
                icon={<FiPrinter />}
                onClick={print}
              />
            </Tooltip>
          </Stack>
        </Stack>
  
        {/* <ProductTable isLoading={isLoading} products={products} /> */}
      </Box>
    );
  }
  