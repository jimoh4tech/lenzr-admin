import {
  Box,
  EmptyState,
  Flex,
  HStack,
  IconButton,
  Popover,
  Portal,
  Separator,
  Spacer,
  Stack,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
// import { useCurrentUser } from "@/hooks/user.hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { useState } from "react";
import { MdNotificationsActive, MdNotificationsOff } from "react-icons/md";

export const Header = () => {
  //   const { currentUser } = useCurrentUser();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("X23APPY2ADMIN");
    navigate("/login");
  };

  return (
    <Box p={5} pb={1} boxShadow={"lg"}>
      <Flex justifyContent={"space-between"}>
        {location.pathname === "/" ? (
          <Text
            fontWeight={"semibold"}
            fontSize={"2xl"}
            alignSelf={"self-end"}
            mb={-4}
          >
            {/* {`Welcome back, ${currentUser?.fullName}!`} */}
          </Text>
        ) : (
          <Spacer />
        )}

        <Flex gap={2} alignItems={"center"}>
          <Popover.Root
            open={open}
            onOpenChange={(e: {
              open: boolean | ((prevState: boolean) => boolean);
            }) => setOpen(e.open)}
          >
            <Popover.Trigger asChild>
              <IconButton
                as={MdNotificationsActive}
                variant={"plain"}
                color={"iris.500"}
                size={"xs"}
              />
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Popover.Title fontWeight="medium">
                      Notifications
                    </Popover.Title>
                    <Tabs.Root defaultValue="all" colorPalette={"iris"}>
                      <Tabs.List color={"iris"}>
                        <Tabs.Trigger value="all">All</Tabs.Trigger>
                        <Tabs.Trigger value="unread">Unread</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="all">
                        <EmptyState.Root>
                          <EmptyState.Content>
                            <EmptyState.Indicator>
                              <MdNotificationsOff />
                            </EmptyState.Indicator>
                            <VStack textAlign="center">
                              <EmptyState.Description>
                                Notification is empty
                              </EmptyState.Description>
                            </VStack>
                          </EmptyState.Content>
                        </EmptyState.Root>
                      </Tabs.Content>
                      <Tabs.Content value="unread">
                        <EmptyState.Root>
                          <EmptyState.Content>
                            <EmptyState.Indicator>
                              <MdNotificationsOff />
                            </EmptyState.Indicator>
                            <VStack textAlign="center">
                              <EmptyState.Description>
                                Notification is empty
                              </EmptyState.Description>
                            </VStack>
                          </EmptyState.Content>
                        </EmptyState.Root>
                      </Tabs.Content>
                    </Tabs.Root>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Separator orientation={"vertical"} />

          <MenuRoot>
            <HStack gap={4} display={{ base: "none", md: "flex" }}>
              <MenuContent w={"fit-content"}>
                <MenuItem
                  value="profile"
                  cursor={"pointer"}
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  value="logout"
                  cursor={"pointer"}
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </MenuContent>
              <MenuTrigger asChild>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor={"pointer"}
                  gap={3}
                >
                  <Avatar src={""} />
                  <Stack gap={1}>
                    <Text fontSize={"sm"}>Anna Pen</Text>
                    <Text fontSize={"xs"} color={"gray.500"}>
                      Admin
                    </Text>
                  </Stack>
                </Flex>
              </MenuTrigger>
            </HStack>
          </MenuRoot>
        </Flex>
      </Flex>
    </Box>
  );
};
