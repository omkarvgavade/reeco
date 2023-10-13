import {
  Avatar,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
  Center,
  HStack,
  Box,
} from "@chakra-ui/react";
import ProductStatus from "./ProductStatus";
import { ProductsListSkeleton } from "../../utils/Skeletons";
import AvocadoHass from "../../assets/AvocadoHass.jpg";
import { useSelector, shallowEqual } from "react-redux";
import { useState } from "react";
import { editProductDetails } from "../../redux/products/ProductsActions";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/ProductsActions";
import { updateProductStatus } from "../../redux/products/ProductsActions";
export default function ProductsTable() {
  const { productsData } =
    useSelector((state) => state.product, shallowEqual) || {};
  
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    id: null,
    orderName: "",
    brand: "",
    price: "",
    quantity: "",
  });
 
  const [productData,setProductData] = useState({
    id: null,
    orderName: "",
    brand: "",
    price: "",
    quantity: "",
  })

  const openEditModal = (rowData) => {
    setIsEditModalOpen(true);
    setEditedData(rowData);
    setProductData(rowData)
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };


  const handleEditSubmit = () => {
    let statusText = "";
    if(productData.price !== editedData.price && productData.quantity !== editedData.quantity){
      statusText = "Quantity and Price updated"
    }else if(productData.price !== editedData.price){
      statusText = "Price updated"
    }else if(productData.quantity !== editedData.quantity){
      statusText = "Quantity updated"
    }
    dispatch(
      editProductDetails({
        id: editedData.id,
        price:editedData.price,
        quantity: editedData.quantity,
        total: editedData.price * editedData.quantity,
        status:statusText ? statusText : productData.status
      },()=>{dispatch(getProducts())},()=>{dispatch(getProducts())})
    );
  
    
    closeEditModal();
  };

  return (
    <Table variant="outline" size="md">
      <Thead>
        <Tr>
          <Th>Product Name</Th>
          <Th>Price</Th>
          <Th>Quantity</Th>
          <Th>Total</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      {productsData && productsData.isPending ? <ProductsListSkeleton /> : null}
      {productsData && Array.isArray(productsData.data)
        ? productsData?.data?.map((row) => (
            <Tbody>
              <Tr key={row.id}>
                <Td fontSize="sm">
                  <Flex direction="row" spacing={2} align="center">
                    <Avatar src={AvocadoHass} alt="AvocadoHass" />
                    <HStack>
                      <Box>
                        <Text fontSize="xl">{row.orderName}</Text>
                        <Text>{row.brand}</Text>
                      </Box>
                    </HStack>
                  </Flex>
                </Td>
                <Td fontSize="sm">₹ {row.price}</Td>
                <Td fontSize="sm">
                  <strong> {row.quantity}</strong>
                </Td>
                <Td fontSize="sm">₹ {row.price * row.quantity}</Td>
                
                <Td bgColor="gray.50" fontSize="sm">
                  <ProductStatus openEditModal={openEditModal} product={row} />
                </Td>
              </Tr>
            </Tbody>
          ))
        : null}
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editedData.orderName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="gray.500">{editedData.brand}</Text>
            <Flex marginTop="2rem" alignItems="center" gap="2rem">
              <Image src={AvocadoHass} alt="AvocadoHass" boxSize="100px" />
              <Box display="flex" flexDirection="column" gap="1rem">
                <FormControl>
                  <HStack display="flex" justifyContent="space-between">
                    <FormLabel>Price</FormLabel>
                    <HStack w="100%" display="flex" justifyContent="start">
                      <Input
                        w="4rem"
                        value={editedData.price}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            price: e.target.value,
                          })
                        }
                      />
                      <Text>₹</Text>
                    </HStack>
                  </HStack>
                </FormControl>
                <FormControl>
                  <HStack  >
                    <FormLabel>Quantity</FormLabel>
                    <HStack w="100%" display="flex" justifyContent="start">
                    <Input
                      value={editedData.quantity}
                      w="4rem"
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          quantity: e.target.value,
                        })
                      }
                    />
                  </HStack>
                  </HStack>
                </FormControl>
                <FormControl>
                  <HStack >
                    <FormLabel>Total</FormLabel>
                    <HStack w="100%" display="flex" justifyContent="start">
                      <Input
                       w="4rem"
                        value={(editedData.price * editedData.quantity).toFixed(
                          2
                        )}
                        isReadOnly
                      />
                      <Text>₹</Text>
                    </HStack>
                  </HStack>
                </FormControl>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter gap="1rem">
            <Button colorScheme="green" onClick={handleEditSubmit}>
              Save
            </Button>
            <Button colorScheme="gray" onClick={closeEditModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Table>
  );
}
