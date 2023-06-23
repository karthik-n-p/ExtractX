import { Box, Button, Divider, Flex, Grid, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import computer from '../../assets/cccc.png'
import Instruction1 from '../../assets/select.png'
import Instruction2 from '../../assets/upload.png'
import Instruction3 from '../../assets/convert.png'
import { useEffect } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

import axios from "axios";
import Landing from "./Landing";

const PracQues = () => {
    
    
    return (

        
        <div bg="white">
            <Box bg={"white"}>
        <Grid templateColumns={{ base: '1fr', md: '3fr 3fr' }} bg={"white"} pt={180} pl={{base: '100px', md:"0px"}} >

<div >
<Image src={computer} alt="Image" ml={20} mt="-15px" width="70%" height="110%" />  

</div>
<div  > 

    <Text fontSize='20px' color='black'ml={-5}>Welcome to</Text>
    <Text fontSize='50px' color='black'ml={-5}>CodeExtract</Text>
    <Text fontSize='25px' color='black'ml={-5}>Unleash the power of visual programming with CodeExtract.</Text>
    <Link to={"/login"} ><Box cursor={"pointer"} w={220} h={39} bg={"#0073c7"} mt={5} ml={-5} borderRadius={50} textAlign={'center'} fontSize={24}  pt={0}>Get Started</Box></Link>

</div>
</Grid >

            <Text mt={28} align={"center"} fontSize='30px' fontWeight={'bold'} color={"black"}>How to Convert Image Formats</Text>
            <Text mt={2} align={"center"} fontSize='16px'   color={"black"}>With the CodeExtract image format converter, you get a free convenient tool to switch between<br/>
the hand written code to digital in the simplest way possible.</Text>
            
<Grid templateColumns={{ base: '1fr', md: '3fr 3fr' }} bg={"white"} pt={10}>
<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>1</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>Select</Text>
    <Text fontSize='16+px' color='black'ml={40}>To start off, click the “Sign up” and create your<br/>
CodeExtract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome<br/> on the pop-up page. Once
you’re set, you’ll be<br/> automatically getting the result on
the CodeExtrat code editor.</Text>
    
</div>
<div >
<Image src={Instruction1} alt="Image" ml={20} mt="-35px" w={364} h={284.38} />  

</div>

<div >
<Image src={Instruction2} alt="Image" ml={200} mt="-35px" w={364} h={284.38} />  

</div>
<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={0}>1</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={0}>Select</Text>
    <Text fontSize='16+px' color='black'ml={0}>To start off, click the “Sign up” and create your<br/>
CodeExtract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome<br/> on the pop-up page. Once
you’re set, you’ll be<br/> automatically getting the result on
the CodeExtrat code editor.</Text>
    
</div>



<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>1</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>Select</Text>
    <Text fontSize='16+px' color='black'ml={40}>To start off, click the “Sign up” and create your<br/>
CodeExtract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome<br/> on the pop-up page. Once
you’re set, you’ll be<br/> automatically getting the result on
the CodeExtrat code editor.</Text>
    
</div>
<div >
<Image src={Instruction3} alt="Image" ml={20} mt="-35px" w={364} h={284.38} />  

</div>



</Grid>
        
        
        </Box>
       </div>
      
        );
};



export default PracQues