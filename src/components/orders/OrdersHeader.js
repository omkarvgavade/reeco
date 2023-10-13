import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  
  export const OrdersHeader = () => {
    const toast = useToast();
  
    function handleBack() {
      toast({
        title: "Can't Perform This Action!",
        status: "error",
        position: "top",
      });
    }
  
    function HandleApprove() {
      toast({
        title: "Order Approved!",
        status: "success",
        position: "top",
      });
    }
  
    return (
      <Container py={2} maxWidth="100%" p="1rem 5rem">
        <Breadcrumb separator={<ChevronRightIcon />} spacing="2">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" variant="body2">
              Orders
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/" variant="body2">
              Order 32457ABC
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
  
        <Stack direction={{ base: "column", sm: "row" }} pt={2} align="center" spacing={2}>
          <Text flex={1} fontSize="xl" fontWeight="bold" textAlign='start'>
            Order 32457ABC
          </Text>
          <Button
            variant="outline"
            colorScheme="rgb(46, 125, 50)"
            color='rgb(46, 125, 50)'
            borderRadius="4.5rem"
            onClick={handleBack}
            isFullWidth
          >
            Back
          </Button>
          <Button colorScheme="rgb(46, 125, 50)" borderRadius="4.5rem" bg="rgb(46, 125, 50)" color='white' onClick={HandleApprove} isFullWidth>
            Approve Order
          </Button>
        </Stack>
      </Container>
    );
  }
  