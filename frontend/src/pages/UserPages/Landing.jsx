import { Box, Button, Divider, Flex, Grid, HStack, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import computer from '../../assets/Programming-cuate.png'
import Instruction1 from '../../assets/Image folder-cuate.png'
import Instruction2 from '../../assets/Image upload-cuate.png'
import Instruction3 from '../../assets/Code snippets-cuate.png'
import Instruction4 from '../../assets/Image folder-bro.png'
import { useEffect } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

import axios from "axios";
import Landing from "./Landing";
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform form validation here
  
      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
        <div>
      <Heading color={'black'}>For help mail us:</Heading>
        <HStack spacing={{base:'5px', md:'200px'}}> 
            <div>
        <Text htmlFor="name" color="#0073c7">Name:</Text>
        <input
          type="text"
          id="name"
          style={{ backgroundColor: '#F0F5FF' , color: '#0073c7' }} 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /></div>
  <div>
        <Text htmlFor="email" color="#0073c7">Email:</Text>
        <input
          type="email"
          id="email"
          style={{ backgroundColor: '#F0F5FF' , color: '#0073c7' }} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /></div>
        <div>
        <Text htmlFor="message" color="#0073c7">Message:</Text>
        <textarea
          id="message"
          style={{ backgroundColor: '#F0F5FF' , color: '#0073c7' }} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        ></textarea></div><Button  color={"white"} bg={"#0073c7"} >Send</Button>
        </HStack>
        </div>
        
     
    );
  };
  
 

const PracQues = () => {
    
    
    return (

        
        <div >
            <Box bg={"white"} mt="50px" >
       <Grid templateColumns={{ base: '1fr', md: '3fr 3fr' }} bg={"white"} pt={180} pl={{base: '100px', md:"0px"}} >

<div >
<Image src={computer} alt="Image" ml={20} mt="-55px" width="80%" height="110%" />  

</div>
<div  > 

   
    <Heading fontSize='48px' fontWeight={700} color='black' lineHeight="58px">Exececute Your Written Code In Seconds </Heading>
    <Text fontSize='15px' mt="18px" color='#121316' mr="100px" width={450} lineHeight="26px">Experience the power of Code Extract today and simplify your handwritten code compilation process. Unlock your creativity, learn new programming languages, and unleash the potential of your handwritten code with ease. Start transforming your images into functional code snippets now!
</Text>
    <Link to={"/login"} >
      <Button colorScheme="facebook" h="48px" w="190px" mt={2} color={"white"} bg="#0073C7">Upload</Button>
    </Link>

</div>
</Grid >

            <Text mt={28} align={"center"} fontSize='30px' fontWeight={'bold'} color={"black"}>How to Convert Image Formats</Text>
            <Text mt={2} align={"center"} fontSize='16px'   color={"black"}>With the Code Extract image format converter, you get a free convenient tool to switch between<br/>
the hand written code to digital in the simplest way possible.</Text>
<Flex align={"center"} justify={"center"} w={'90vw'} ml={25}>       
<Grid templateColumns={{ base: '1fr', md: '2fr 2fr' }} bg={"white"} pt={10} rowGap={25}>
<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>1</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>Select</Text>
    <Text fontSize='16+px' color='black'ml={40}>To start off, click the “Sign up” and create your<br/>
Code Extract account. Then, click the "Upload Image"<br/> and select the format for your
desired outcome</Text>
    
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
    <Text fontSize='16+px' color='black'ml={0}>After get started click on the "Upload Image"<br/> button to select the image containing the handwritten <br/>code you want to compile or just drag and drop your image there
</Text>
    
</div>



<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>3</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={40}>Compile the code</Text>
    <Text fontSize='16+px' color='black'ml={40}>After the handwritten code is successfully detected,<br/> Code Extract proceeds with the compilation process.<br/> It interprets the code, checks for syntax errors,  hit the Run button. Then you can see the correct output.</Text>
    
</div>
<div >
<Image src={Instruction3} alt="Image" ml={20} mt="-35px"  h="350px" w="350px" />  

</div>
<div  >
<Image src={Instruction4} alt="Image" ml={200} mt="-55px" h="400px" w="400px" />  

</div>
<div  > 

    <Text fontSize='28px' fontWeight={'semibold'} color='black' mt={10} ml={0}>4</Text>
    <Text fontSize='28px' fontWeight={'semibold'} color='black' ml={0}>Save</Text>
    <Text fontSize='16+px' color='black'ml={0}>If you're satisfied with the compilation results, you have the option <br/>to save the compiled code. And also you can log in back to see <br/>your programs after some times.
</Text>
    
</div>



</Grid>

    
</Flex> 
<Box borderColor={"#F0F5FF"} borderWidth={5} p={5}>
<ContactForm/>
</Box>
        <footer>
        <Box bg={'#F0F5FF'} pb={5} >
        
        <Text color={'black'} align={'center'} fontSize={35}><b>Code</b> Extract</Text> 
        <HStack ml={110} spacing={{base: '10px', md: '800px'}} mt={8} ><Image src={Logo} w={200}/>
        <HStack>
            <HStack>
        <Text alignItems={"baseline"} color={'black'}>Contact us</Text>
        <Divider borderColor="#0073c7" orientation="vertical" h={100}/>
        </HStack>
        <VStack align={'left'} color={"black"}>
            <Text>Code Extract</Text>
            <Text>Phone : +91 97781 53547</Text>
            <Text>Email : projectcmp03@gmail.com</Text>
        </VStack>
        </HStack></HStack>
        </Box>
        </footer>
        
        </Box>
       </div>
      
        );
};



export default PracQues