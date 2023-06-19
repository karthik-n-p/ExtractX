

//Manikoth


import React, { useEffect, useState } from 'react'
import { Text,Box,Flex,Heading,Grid,Button,Icon,Divider, Menu, MenuButton, MenuList, MenuItem, Stack} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai';
import image from '../../assets/graph.webp'
import { FaEdit, FaPlusCircle, FaUser, FaUserCircle, FaUsers } from 'react-icons/fa';
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';



function AdminDashboard() {
  const serialNumber = 1;
  const studentName = "Zeus B Hunter";
  const scoreGot = "180";
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const [ongoingCompetitions, setOngoingCompetitions] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3000/get-ongoing-competitions")
    .then((response) => {
      console.log("response.data", response.data);
      const ongoingCompetitionsArray = response.data.ongoingCompetitions;
      console.log("ongoingCompetitionsArray", ongoingCompetitionsArray);

      setOngoingCompetitions(ongoingCompetitionsArray);
    })
    .catch((error) => {
      console.log(error);
    });


  // Remaining code...
}, []);


const today = moment();


  return (
    <div >

       <Heading as="h1" size="xl" textAlign="left" marginTop="4" marginLeft="280">
      Dashboard
    </Heading>
    

      <Grid
      height="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)">

      <Box  bg="#40414A"
        p={4}
        m={4}
        width="792.5px"
        height="319px"
        marginLeft="268px"
        marginTop="30px"
        borderRadius="md">
        <Box display="flex" alignItems="center" justifyContent="space-between" height="44px">

      <Text fontWeight="bold" ml="10px" fontSize="22px" mt={4} >
ONGOING COMPETITIONS 
      </Text>
      <Box
       cursor="pointer"
        display="flex"
        alignItems="center"
        border="4px"
        borderColor="black"
        color="white"
        borderRadius="10px"
        justifyContent="center"
        padding="5px"
        //  mt={4} // Apply margin-top to create space

      >Monitor Items
      <Icon as={AiOutlineEye} boxSize={6} />
      </Box>

     </Box>
     <Divider mt={3} mb={4} borderColor="white" width="100%"/>
     
         <Flex direction="row">

         {ongoingCompetitions
            .filter(competition => moment(competition.startDate).isBefore(today))
            .map((competition) => (

              <Box borderWidth={2} borderRadius={5} ml={1}>
          <Flex direction="column" marginLeft="10px" >
            <Box margin={5} >
            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>%53.83</h3>
            <h4 style={{fontsize: '0.5rem',color:'grey'}}>{competition.startDate}</h4>
            </Box>
            <Box margin={3} marginTop={8} flex={1} display="flex" flexDirection="column" justifyContent="flex-end">
        <h5 style={{ fontSize: '1rem', color: 'white' }}> {competition.competitionName} </h5>
        <Stack direction="row" spacing={-2} position="relative">
        <Icon as={FaUserCircle} boxSize={7} color="green.500" borderColor={"#808191"} borderWidth={1} borderRadius={35} zIndex={1}/>
        <Icon as={FaUserCircle} boxSize={7} color="green.500" borderColor={"#808191"} borderWidth={1} borderRadius={35}  zIndex={2}/>
        <Icon as={FaUserCircle} boxSize={7} color="green.500" borderColor={"#808191"} borderWidth={1} borderRadius={35} zIndex={3}/>
        <Icon as={FaPlusCircle} boxSize={7} color="green.500" borderColor={"#808191"} borderWidth={1} borderRadius={35} zIndex={4}/>

        </Stack>
        </Box>
          </Flex>

          </Box>
          ))}    

          </Flex>
         
      </Box>


      {/* Box-2 */}
      <Box
      p={4}
      width="300px"
      height="319px"
      marginTop="30px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      bg="#40414A"   >
      <Text fontWeight="bold" fontSize="22px" mb={4}>
        ADD NEW COMPETITON
      </Text>
      <Divider mb={4}  borderColor="white" width="100%"/>

      <Link to="/createcomp"><Button
      bg="#2EC866"
       color="white"
        variant="solid"
        leftIcon={<Icon as={AiOutlinePlus} boxSize={10} fontWeight={'bold'} verticalAlign="middle" ml="5px" />}
        mt={50}  // Apply margin-top to create space

      ></Button></Link>
 </Box>

      <Box bg="#40414A" p={4} m={4} width="607px" height="355px" marginLeft="268px" borderRadius="md">
  <Box display="flex" alignItems="center" justifyContent="space-between" height="44px">
    <Text fontWeight="bold" ml="10px" fontSize="22px" mt={4}>
      COMPETITION STATUS
    </Text>
    <Box
      display="flex"
      alignItems="center"
      border="4px"
      borderColor="black"
      color="white"
      borderRadius="10px"
      justifyContent="center"
      padding="7px"
    >
      
      <Menu>
      <MenuButton >
        {selectedOption || "Choose Competition"}
      </MenuButton>
      <MenuList>{ongoingCompetitions
            .filter(competition => moment(competition.startDate).isBefore(today))
            .map((competition) => 
              
            
            (
              <MenuItem onClick={() => handleOptionSelect(competition.competitionName)}> {competition.competitionName} </MenuItem>
      ))} </MenuList> 
    </Menu>
    
    </Box>
  </Box>
  <Divider mt={3} mb={1} borderColor="white" width="100%" />
  <Box display="flex" justifyContent="center" pt={2}>
    <img src={image} alt="Your image" width="80%" height="100%" objectFit="cover" />
  </Box>
</Box>


      {/* -------------------------Box-4 ---------------------------------------------*/}
 
       <Box 
         p={4}
      width="470px"
      height="356px"
      position="relative"
      right="170px"
      top="15px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      textAlign="left"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // bg="#40414A"
      // backgroundImage="linear-gradient(to right, #1B7D6B, #A6C82E, #2EC866, #E8F08B)"
      backgroundImage="linear-gradient(to top right, #1B7D6B, #A6C82E, #2EC866, #E8F08B)"


         >
        <Box display="flex" textAlign="left" justifyContent="space-between" height="44px">
      <Text fontWeight="bold" fontSize="22px" mb={4} mr="96px">
        Leader Board
      </Text>
      <Box
      display="flex"
      alignItems="center"
      border="4px"
      borderColor="#AAFFAA"
      color="white"
      borderRadius="10px"
      justifyContent="center"
      padding="7px"
    >
      <Menu  >
      <MenuButton >
        {selectedOption || "Choose Competition"}
      </MenuButton>
      <MenuList>{ongoingCompetitions
            .filter(competition => moment(competition.startDate).isBefore(today))
            .map((competition) => 
              
            
            (
              <MenuItem onClick={() => handleOptionSelect(competition.competitionName)}> {competition.competitionName} </MenuItem>
      ))} </MenuList> 
    </Menu>
    </Box>
     
     </Box>
     <Divider borderWidth={2}/>
     
    <Box display="flex" flexDirection="column" pl={1}>
    <Box width="423px" height="59px" marginBottom="10px" borderRadius="10px" pt={4}      backgroundImage="linear-gradient(to right, rgb(7, 43, 35), rgb(95, 115, 9))"
 > 
         <span>
      <Box as="span" fontWeight="bold" pl={3} >
        {serialNumber}
      </Box>
      <Box as="span" marginLeft="2rem" color="white">
        {studentName}
      </Box>
      <Box as="span" marginLeft="10rem" fontStyle="italic">
        {scoreGot}
      </Box>
    </span>
      </Box>
      <Box width="423px" height="59px" marginBottom="10px" borderRadius="10px" pt={4}  backgroundImage="linear-gradient(to right, rgb(7, 43, 35), rgb(95, 115, 9))"

>
<span>
      <Box as="span" fontWeight="bold" pl={3} >
      2
      </Box>
      <Box as="span" marginLeft="2rem" color="white">
        {studentName}
      </Box>
      <Box as="span" marginLeft="10rem" fontStyle="italic">
        {scoreGot}
      </Box>
    </span>
      </Box>
      <Box width="423px" height="59px" marginBottom="10px" borderRadius="10px" pt={4}      backgroundImage="linear-gradient(to right, rgb(7, 43, 35), rgb(95, 115, 9))"
>
<span>
      <Box as="span" fontWeight="bold" pl={3} >3</Box>
      <Box as="span" marginLeft="2rem" color="white">
        {studentName}
      </Box>
            <Box as="span" marginLeft="10rem" fontStyle="italic">
        {scoreGot}
      </Box>
    </span>
      </Box>
      <Box width="423px" height="59px"  borderRadius="10px"   pt={4}    backgroundImage="linear-gradient(to right, rgb(7, 43, 35), rgb(95, 115, 9))"
>
<span>
      <Box as="span" fontWeight="bold" pl={3} >4</Box>
      <Box as="span" marginLeft="2rem" color="white">
        {studentName}
      </Box>
      <Box as="span" marginLeft="10rem" fontStyle="italic">
        {scoreGot}
      </Box>
    </span>
      </Box>
    </Box>

          </Box>
    </Grid>
    </div>
  )
}

export default AdminDashboard
