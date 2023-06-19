import React, { useState } from 'react';
import { Box, Flex, Spacer, IconButton, Input, InputGroup, InputRightElement, Circle, useColorMode, Avatar, Button, HStack, Image, Heading, Text } from '@chakra-ui/react';
import { FaArrowDown, FaBell, FaChevronDown, FaSearch, FaSortDown, FaSun, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../pages/UserPages/AuthContext';
import { MdArrowDropDown, MdOutlineArrowDropDown, MdPinDrop } from 'react-icons/md';
import ProfileSection from '../signup-page/Dropdown';


const Header = () => {
  const { setIsRegistered } = useContext(AuthContext);
  const { isRegistered, username } = React.useContext(AuthContext);
  console.log("authcontext ", isRegistered);
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get color mode (light or dark) and toggle function
  const location = useLocation();
  const path = location.pathname;

  const shouldRenderOtherElements = path !== '/login' && path !== '/signup'; // If path is not login or signup, render other elements

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  return (
    <Box pos="static" display="flex" top="0" width="100%" zIndex={20}>
      <Flex align="center">
        {/* Logo */}
        <HStack alignItems="center" justify="center" width="300px" height="80px" ml={'80px'}>
          <Image src={Logo} alt="Logo" mr="-7px" mt="px" width="60px" height="60px" />
          <Heading fontWeight="bold" color="txtw" fontSize="3xl" p="40px 65px 35px 0px">
            CodeSpace
          </Heading>
        </HStack>

        {/* Search bar */}
        <Box ml="50px">
          <InputGroup>
            <Input display="flex" placeholder="Search" width={{ base: "350px", md: "650px" }} ml="45px" h="50px" bg="#494853" borderWidth="0px" />
            <InputRightElement mt="5px">
              <FaSearch size="25px" color="grey2" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Spacer />

        {shouldRenderOtherElements && (
          <>
            <Box>
              <Circle bg="#32313B" mx={7} onClick={toggleColorMode} cursor="pointer">
                <IconButton icon={<FaSun size="25px" />} w="45px" h="45px" borderRadius="100px" color="yellow" bg="#32313B" size="md" aria-label="Toggle theme" />
              </Circle>
            </Box>

            <Flex alignItems="center" gap="5px"  onClick={handleToggleDropdown} cursor={'pointer'}>
              {isRegistered &&
              <IconButton
                icon={<FaUser size="25px" />}
                w="45px"
                h="45px"
                borderRadius="100px"
                color="btng"
                bg="#32313B"
                size="md"
                mr="5px"
              
              />
}
              {isRegistered ? (
                <Flex gap="10px">
                  <Text
                    color="white"
                    fontSize="13px"
                    letterSpacing={'1px'}
                    lineHeight={"13px"}
                    fontWeight={'400'}
                    fontStyle={'normal'}
                    fontFamily={'Poppins'}
                   
                    
                  >
                    {username}
                  </Text>
                  <FaChevronDown size="15px" color="#808191" />
           
                 
                </Flex>
              ) : (
                <></>
              )}
            </Flex>

          </>
        )}
               {isRegistered ? (
              <IconButton

                icon={<FaBell size="25px" />}
                w="45px"
                h="45px"
                borderRadius="100px"
                color="btng"
                bg="#32313B"
                size="md"
                mx={'30px'}
              />
            ) : (
              <></>
            )}
             {isDropdownOpen && <ProfileSection  handleToggleDropdown={handleToggleDropdown}/>}
          
        <Box>
          <HStack spacing={2}>
            <>
           

              {path !== '/login' && !isRegistered && (
                <Link to="/login">
                  <Button color="black" bg="btng" ml="30px" >
                    Login
                  </Button>
                </Link>
              )}
                 {path !== '/signup' && !isRegistered && (
                <Link to="/signup">
                  <Button color="black" bg="white" mx="5">
                    SignUp
                  </Button>
                </Link>
              )}
            </>
           
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;