import {
  Button,
  IconButton,
  Stack,
  Tooltip,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { generateStatusColor } from "../../utils/HelperFunctions";
import { updateProductStatus } from "../../redux/products/ProductsActions";

import { getProducts } from "../../redux/products/ProductsActions";
export default function ProductStatus({ product, openEditModal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cancelRef = React.useRef();
  const toast = useToast();

  const statusText = product.status;
  const statusColor = generateStatusColor(product.status);


  
  const handleToast =(message,isGood)=> {
    toast({
      title: message,
      status: isGood ? 'success':'error',
      position: "top",
    });
  }
  const approveHandler = () => {
    if(product.status === "approved") {
        handleToast("Product is already approved",false)
        return;
    }
    dispatch(
      updateProductStatus(
        {
          id: product.id,
          status: "approved",
        },
        () => {
          dispatch(getProducts());
        }
      )
    );
  };

  const missingHandler = () => {
    onOpen();
  };

  const setAsMissing = () => {
    dispatch(
      updateProductStatus(
        {
          id: product.id,
          status: "missing",
        },
        () => {
          dispatch(getProducts());
        }
      )
    );
    onClose();
  };

  const setAsUrgentMissing = () => {
    dispatch(
      updateProductStatus(
        {
          id: product.id,
          status: "missing-urgent",
        },
        () => {
          dispatch(getProducts());
        }
      )
    );
    onClose();
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        gap={1}
        alignItems="center"
      >
        <span>
          {product.status && (
            <Button
              size="sm"
              colorScheme={
                statusColor === "success"
                  ? "green"
                  : statusColor === "warning"
                  ? "yellow"
                  : "red"
              }
            >
              {statusText}
            </Button>
          )}
        </span>
        <Tooltip label="Flag as Approved">
          <IconButton
            onClick={approveHandler}
            size="sm"
            colorScheme="teal"
            icon={<CheckIcon />}
          />
        </Tooltip>
        <Tooltip label={product.status === 'missing' ? "Flag as Missing urgent":"Flag as Missing"}>
          <IconButton
            size="sm"
            onClick={missingHandler}
            colorScheme={
              product.status === "missing"
                ? "red"
                : product.status === "missing-urgent"
                ? "yellow"
                : "gray"
            }
            icon={<CloseIcon />}
          />
        </Tooltip>
        <Button
          onClick={() => {
            openEditModal(product);
          }}
          size="sm"
          colorScheme="gray"
        >
          Edit
        </Button>
      </Stack>

      {/* Missing Product */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Missing Product</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Is "Chicken breast fillets, boneless matuu marianted 6 ounce raw,
              Invivid" urgent?
            </AlertDialogBody>
            <AlertDialogFooter gap="1rem">
              <Button onClick={setAsMissing} colorScheme={product.status === "missing" ? 'gray' :'green'}>
                {product.status === "missing" ? 'No' :'Yes'}
              </Button>
              <Button onClick={setAsUrgentMissing} colorScheme={product.status === "missing-urgent" ? 'gray' :'green'}>
                {product.status === "missing-urgent" ? 'No' :'Yes'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
