import { Stack, Container } from "@chakra-ui/react";
// import OrderInfo from "../components/order/order-info";
// import OrderList from "../components/order/order-list";
import { OrdersInfo } from "./OrdersInfo";
import { OrdersList } from "./OrdersList";

export const Orders = () => {
  return (
    <Stack spacing={2}  bg="gray.100" minH="calc(100vh - 72px)" as="main">
      <Container maxW="80%">
        <OrdersInfo />
        <OrdersList />
      </Container>
    </Stack>
  );
}
