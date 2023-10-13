import {
  Box,
  Flex,
  IconButton,
  Text,
  Stack,
  Button,
  Badge,
  Drawer,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const drawerWidth = 240;
const navItems = ["Store", "Orders", "Analytics"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} textAlign="center">
      <Text fontSize="xl" fontFamily="fantasy">
        Reeco
      </Text>
      <Divider my={2} />
      <Stack>
        {navItems.map((item) => (
          <Button key={item} textAlign="center" variant="unstyled">
            {item}
          </Button>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Flex as="header" display="flex" bg={"rgb(46, 125, 50)"} p="1rem 5rem">
      <Box as="nav" flex="1">
        <Stack py={2} direction="row" align="center">
          <IconButton
            colorScheme="teal"
            aria-label="open drawer"
            icon={<HamburgerIcon />}
            display={{ sm: "none" }}
            onClick={handleDrawerToggle}
          />
          <Stack
            direction="row"
            spacing={35}
            flex="1"
            display={{ base: "none", sm: "flex" }}
          >
            <Text fontSize="xl" color="white" fontWeight={700}>
              Reeco
            </Text>
            {navItems.map((item) => (
              <Button key={item} color="white" fontWeight={400} variant="link">
                {item}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={7} display={{ base: "none", sm: "flex" }}>
            <Badge
              variant="solid"
              colorScheme="red"
              borderRadius="full"
              position='relative'
              top='-7px'
              zIndex='3'
              left='2rem'
              ml={2}
              display="inline-block"
            >
              4
            </Badge>
            <IconButton
              colorScheme="transperent"
              size="xl"
              icon={<RiShoppingCart2Line />}
            />
            <Menu >
              <MenuButton as={Button} variant='link'  color="white" textDecoration={'none'} fontWeight={400} rightIcon={<ChevronDownIcon />}>
                Hello, James
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <nav>
        <Drawer
          isOpen={mobileOpen}
          onClose={handleDrawerToggle}
          placement="left"
          size={drawerWidth}
          blockScrollOnMount
        >
          {drawer}
        </Drawer>
      </nav>
    </Flex>
  );
}
