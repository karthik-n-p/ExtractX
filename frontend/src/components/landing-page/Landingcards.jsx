import React from 'react'
//I want to add 3d model of room
import { Box, Flex, Icon} from '@chakra-ui/react'
import { Text,Button } from '@chakra-ui/react'
import { MdArrowDropDown, MdSettings } from 'react-icons/md'
import { Dropdown } from 'bootstrap'
import { FaArrowDown, FaChevronDown, FaSortDown } from 'react-icons/fa'

function Landingcards() {
  
  return (
    <div>
      <Box display="flex" flexDirection={'row'} width="100%">
    <Box pos="relative" h="350px" w="500px"  mt="40px" left="120px" textAlign={'left'} color="white">
      <Text fontWeight="semibold" fontSize={38}>The best place to build,<br /> upskill, and showcase <br/>your talent. </Text>
      <Text fontSize={18} mt="20px">Elevate your coding skills, showcase your work,and engage in friendly competitions in a vibrant community. Join us to unlock your full coding potential!</Text>
      <Button fontWeight={'normal'} mt="20px" bg="btng" color="black">SignUp</Button>
    </Box>

    <Box pos="relative" h="420px" w="600px" bg="linear-gradient(109.61deg, #4C4F5A 4.26%, #202125 84.84%)" borderRadius="10px" left="280px" mt="50px"  textAlign={'left'} color="white">
      
    <Box pos="absolute"   p="5px" right="20px" h="150px" w="400px" bg="#1D1E22" boxShadow={'0px 4px 30px rgba(0, 0, 0, 0.5)'} borderRadius={6} mt="-30px">
       <Flex  mt="10px" ml="10px" justify="space-between">
          <Flex gap="3px">
                <MdSettings color="#4C4F5A" />
                <Text fontWeight="semibold" color="#C5C8D4" fontSize={13}>C</Text>
           </Flex>
          <FaChevronDown color="#4C4F5A" />
        </Flex>
    <Text color="#A88038" fontSize="13px" ml="10px">
      
      #include &lt;stdio.h&gt;
      <br />
      int main() &#123;
      <br />
      &emsp;printf("hello world");
      <br />
      &emsp;return 0;
      <br />
      &#125;
    </Text>
    
    </Box>



    <Box pos="absolute"  p="5px" top="160px" right="-20px" h="150px" w="400px" bg="#1D1E22" boxShadow={'0px 4px 30px rgba(0, 0, 0, 0.5)'} borderRadius={6} mt="-30px">
       <Flex  mt="10px" ml="10px" justify="space-between">
          <Flex gap="3px">
                <MdSettings color="#4C4F5A" />
                <Text fontWeight="semibold" color="#C5C8D4" fontSize={13}>PYTHON</Text>
           </Flex>
          <FaChevronDown color="#4C4F5A" />
        </Flex>
    <Text color="#E1CA72" fontSize="13px" ml="10px">
      def hello_world():
      <br />
      &emsp;print("hello world")
     
    </Text>
    
    </Box>


    <Box pos="absolute" p="5px" top="320px" right="20px" h="150px" w="400px" bg="#1D1E22" boxShadow={'0px 4px 30px rgba(0, 0, 0, 0.5)'} borderRadius={6} mt="-30px">
       <Flex  mt="10px" ml="10px" justify="space-between">
          <Flex gap="3px">
                <MdSettings color="#4C4F5A" />
                <Text fontWeight="semibold" color="#C5C8D4" fontSize={13}>JS</Text>
           </Flex>
          <FaChevronDown color="#4C4F5A" />
        </Flex>
    <Text color="#74B087" fontSize="13px" ml="10px">
      function hello_world() &#123;
      <br />
      &emsp;console.log("hello world");
      <br />
     
    </Text>
    
    </Box>
    
    
    </Box>

    </Box>

      
    </div>
  )
}

export default Landingcards