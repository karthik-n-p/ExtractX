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
    background: '#F0F5FF'
  };
  

  return (
    <Box style={boxStyle}  >
      <Flex align="center">
        {/* Logo */}
        <HStack alignItems="center" justify="center" width="300px" height="80px" ml={'100px'}>
           <Image src={Logo} alt="Logo" mr="-7px" mt="px" width="60px" height="60px" /> 
          <Heading fontWeight="bold" color="#0073c7" fontSize="3xl" p="40px 65px 35px 0px">
            CodeExtract
          </Heading>
        </HStack>

        {/* Search bar */}
      
        <Spacer />
        <Spacer/>

        {shouldRenderOtherElements && (
          <>
            

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

          </>
        )}
              
             {isDropdownOpen && <ProfileSection  handleToggleDropdown={handleToggleDropdown}/>}
          
        <Box pl={2}>
          <HStack spacing={1}>
            <>
           

              
            {path !== '/about' && (
                <Link to="/about">
                  <Button color="#ffffff" bg="#0073c7" ml="30px" >
                    About
                  </Button>
                </Link>
              )}
              
              {path !== '/login' && !isRegistered && (
                <Link to="/login">
                  <Button color="#ffffff" bg="#0073c7"ml="30px" >
                    Login
                  </Button>
                </Link>
              )}
                 {path !== '/signup' && !isRegistered && (
                <Link to="/signup">
                  <Button color="#ffffff" bg="#0073c7" ml="30px">
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