import { Table, Tbody, Tr, Td, Skeleton } from "@chakra-ui/react";
import React from "react";
export function ProductsListSkeleton() {
  const skeletonRow = (
    <Tr>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
      <Td>
        <Skeleton height={25} startColor="gray.300" endColor="gray.100" />
      </Td>
    </Tr>
  );

  return (
      <Tbody>
        {Array.from(Array(6).keys()).map((item) => (
          <React.Fragment key={item}>
            {skeletonRow}
          </React.Fragment>
        ))}
      </Tbody>
  );
}
