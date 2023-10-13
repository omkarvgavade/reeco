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
  import {FiPrinter} from 'react-icons/fi';
  import { getProducts } from "../../redux/products/ProductsActions";
  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import ProductsTable from "../products/ProductsTable";
  export const OrdersList = () => {
    const dispatch = useDispatch();


    const handlePrint = () =>{
      window.print();
    }

    useEffect(() =>{
        dispatch(getProducts());
    },[])
  
    return (
      <Box borderWidth="1px" p="1rem 3rem"  bg="#fff" borderRadius="1rem">
        <Stack
          direction={{ base: "column", sm: "row", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          pb={3}
        >
          <InputGroup size="md" maxWidth="500px" borderRadius="full">
            <Input
              placeholder="Search..."
              colorScheme="teal"
              borderRadius="4rem"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                bg="none"
                size="sm"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
  
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={7}
          >
            <Button variant="outline" colorScheme="teal" borderRadius="4.5rem">
              Add Item
            </Button>
            <Tooltip label="Print">
              <IconButton
                borderRadius="4.5rem"
                aria-label="Print"
                icon={<FiPrinter />}
                onClick={handlePrint}
              />
            </Tooltip>
          </Stack>
        </Stack>
  
        <ProductsTable/>
      </Box>
    );
  }
  