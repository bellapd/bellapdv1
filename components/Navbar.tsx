import { Box, Link, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
import NextLink from "next/link";

export default function Navigation(): JSX.Element {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      as="nav"
    >
      <Flex maxW="container.md" align="center" mx="auto">
        <NextLink href="/">
          <Link ml={4}>
            <Image
              width="60px"
              height="60px"
              alt="avatar"
              src="/images/avatar.png"
            />
          </Link>
        </NextLink>
        <Flex marginLeft="auto">
          {isMobile ? (
            <Dropdown />
          ) : (
            <Flex display={{ base: "none", md: "flex" }}>
              <Navlink href="/about">
                <strong>01</strong> About
              </Navlink>
              <Navlink href="/blog">
                <strong>02 </strong> Blog
              </Navlink>
              <Navlink href="/portfolio">
                <strong>03 </strong> Portfolio
              </Navlink>
            </Flex>
          )}
        </Flex>
        <Switch />
      </Flex>
    </Box>
  );
}
