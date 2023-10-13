import { OrdersHeader } from "./orders/OrdersHeader";
import Navbar from "./navbar/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar />
      <OrdersHeader />
    </>
  );
};
