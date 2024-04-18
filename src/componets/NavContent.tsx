import { Link, Routes, Route } from "react-router-dom";
import DrinkingWater from "./pages/DrinkingWater";
import Food from "./pages/Food";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Tasks from "./pages/Tasks";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const NavContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <HStack justifyContent={"right"}>
        {" "}
        {/* Show menu button on small screens */}
        <Menu
          isOpen={isOpen}
          onOpen={handleToggleMenu}
          onClose={handleToggleMenu}
        >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={handleToggleMenu}
          />

          <MenuList>
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/drinking">
              DrinkingWater
            </MenuItem>
            <MenuItem as={Link} to="/phone">
              Phone
            </MenuItem>
            <MenuItem as={Link} to="/tasks">
              Tasks
            </MenuItem>
            <MenuItem as={Link} to="/food">
              Food
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/drinking" element={<DrinkingWater />} />

        <Route path="/phone" element={<Phone />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
};

export default NavContent;
