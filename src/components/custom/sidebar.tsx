// import { useCurrentUser } from "@/hooks/user.hooks";
import { Box, Image, Stack, Button, Flex } from "@chakra-ui/react";
import { BiPound } from "react-icons/bi";
import { BsBasket3, BsBox } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //   const { setCurrentUser } = useCurrentUser();
  // const handleLogout = () => {
  //   localStorage.removeItem("X23APPY2ADMIN");
  //   // setCurrentUser(null);
  //   navigate("/login");
  // };
  return (
    <Box
      w="250px"
      bgColor="#FDFDFF"
      h="100vh"
      p="4"
      borderRight="1px solid #FDFDFF"
      position="sticky"
      top="0"
      overflowY="auto"
      css={{
        /* Hide scrollbar for Webkit browsers */
        "::-webkit-scrollbar": { display: "none" },
        /* Hide scrollbar for Firefox */
        scrollbarWidth: "none",
        /* Hide scrollbar for Edge & IE */
        "-ms-overflow-style": "none",
      }}
      boxShadow={"lg"}
    >
      {/* Logo */}
      <Image
        src="/images/logo.svg"
        alt="Login Image"
        // w={"100px"}
        borderRadius="lg"
        onClick={() => navigate("/")}
        cursor={"pointer"}
        mb={4}
      />
      <Flex justifyContent={"space-between"} flexDir={"column"} h={"90%"}>
        <Stack gap={1}>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/" ? "subtle" : "plain"}
            onClick={() => navigate("/")}
          >
            <MdDashboard /> Overview
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/users" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/users" ? "subtle" : "plain"}
            onClick={() => navigate("/users")}
          >
            <LuUsers /> Users
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/orders" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/orders" ? "subtle" : "plain"}
            onClick={() => navigate("/orders")}
          >
            <BsBasket3 /> Orders
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/products" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/products" ? "subtle" : "plain"}
            onClick={() => navigate("/products")}
          >
            <BsBox /> Products
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/payments" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/payments" ? "subtle" : "plain"}
            onClick={() => navigate("/payments")}
          >
            <BiPound /> Payments
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/reports" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/reports" ? "subtle" : "plain"}
            onClick={() => navigate("/reports")}
          >
            <FaRegFileAlt /> Reports
          </Button>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/settings" ? "lemon" : "black"}
            // color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/settings" ? "subtle" : "plain"}
            onClick={() => navigate("/settings")}
          >
            <IoSettingsOutline /> Settings
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
