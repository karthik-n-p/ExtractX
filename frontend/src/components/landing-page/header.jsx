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

  const boxStyle = {
    pos: "static",
    top: "0",
    width: "100%",
    zIndex: "20", 
    background:"#F0F5FF"
  
  };
  

  return (
   
    <Box style={boxStyle} pos={'fixed'}  >
      <Flex align="center">
        {/* Logo */}
        <HStack alignItems="center" justify="center" width="300px" height="60px" >
        <Text color={'black'} fontSize={24} fontWeight={600}>Code</Text>
        <Text color={'black'} fontSize={24} fontWeight={300}>Extract</Text>
        </HStack>

        {/* Search bar */}
      
      
        <Spacer />
        <Spacer/>
        <Spacer/>

        {shouldRenderOtherElements && (
          <>
            

            <Box right={0} w="300px" h={10} alignItems="right"   onClick={handleToggleDropdown} cursor={'pointer'} > 
            <HStack spacing={0}>
            

            <Box right={0} w="300px" h={10} alignItems="right"   onClick={handleToggleDropdown} cursor={'pointer'} > 
            <HStack spacing={0}>
              {isRegistered &&
              <IconButton
                icon={<FaUser size="25px" />}
                w="45px"
                h="45px"
                borderRadius="100px"
                color="#ffffff"
                bg="#0073c7"
              
           
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
                    fontWeight={'600'}
                  
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
              </HStack>
            </Box>
              </HStack>
            </Box>

          </>
        )}
              
             {isDropdownOpen && <ProfileSection  handleToggleDropdown={handleToggleDropdown}/>}
          
        <Box pl={2}>
          <HStack spacing={0} mr={10}>
            <>
           
              
            
              
              {path !== '/login' && !isRegistered && (
                <Link to="/login">
                  <Button color="black" bg='#0073C7' ml="30px" >
                    Login
                  </Button>
                </Link>
              )}
                 {path !== '/signup' && !isRegistered && (
                <Link to="/signup">
                  <Button color="black" border={'1px solid #0073C7'} mx="5">
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