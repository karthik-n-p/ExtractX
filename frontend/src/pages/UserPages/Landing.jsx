import { Box, Button, Divider, Flex, Grid, HStack, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import computer from '../../assets/Programming-cuate.png'
import Instruction1 from '../../assets/Image folder-cuate.png'
import Instruction2 from '../../assets/Image upload-cuate.png'
import Instruction3 from '../../assets/Code snippets-cuate.png'
import { useEffect } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

import axios from "axios";
import Landing from "./Landing";

const PracQues = () => {
    
    
    return (

        
        <div >
            <Box bg={"white"} mt="60px" >
       <Flex  align={"center"} mr={50} >

<div >
<Image src={computer} alt="Image" ml={20} mt="-15px" width="80%" height="110%" />  

</div>
<div  > 

   
    <Heading fontSize='48px' fontWeight={700} color='black' lineHeight="58px">Execute Your Written Code In Seconds </Heading>
    <Text fontSize='15px' mt="18px" color='#121316'mr="100px" width={550} lineHeight="26px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos libero, minima non dolore ex eveniet commodi dicta neque eos, ad nihil beatae obcaecati.</Text>
    <Link to={"/login"} >
      <Button colorScheme="facebook" h="48px" w="190px" mt={2} color={"white"} bg="#0073C7">Upload</Button>
    </Link>

</div>
</Flex >

            <Text mt={28} align={"center"} fontSize='30px' fontWeight={'bold'} color={"black"}>How to Convert Image Formats</Text>
            <Text mt={2} align={"center"} fontSize='16px'   color={"black"}>With the CodeExtract image format converter, you get a free convenient tool to switch between<br/>
the hand written code to digital in the simplest way possible.</Text>
<Flex align={"center"} justify={"center"} w={'100vw'} ml={25}>       
<Grid templateColumns={{ base: '1fr', md: '2fr 2fr' }} bg={"white"} pt={10} rowGap={25}>
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
<Image src={Instruction1} alt="Image" ml={20} mt="-35px" h="350px" w="350px" />  

</div>

<div >
<Image src={Instruction2} alt="Image" ml={200} mt="-75px" h="400px" w="400px" />  

</div>
<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={0}>2</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={0}>Upload</Text>
    <Text fontSize='16+px' color='black'ml={0}>To start off, click the “Sign up” and create your<br/>
CodeExtract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome<br/> on the pop-up page. Once
you’re set, you’ll be<br/> automatically getting the result on
the CodeExtrat code editor.</Text>
    
</div>



<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>3</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>Convert</Text>
    <Text fontSize='16+px' color='black'ml={40}>To start off, click the “Sign up” and create your<br/>
CodeExtract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome<br/> on the pop-up page. Once
you’re set, you’ll be<br/> automatically getting the result on
the CodeExtrat code editor.</Text>
    
</div>
<div >
<Image src={Instruction3} alt="Image" ml={20} mt="-35px"  h="350px" w="350px" />  

</div>



</Grid>
</Flex> 
        
        
        </Box>
       </div>
      
        );
};



export default PracQues