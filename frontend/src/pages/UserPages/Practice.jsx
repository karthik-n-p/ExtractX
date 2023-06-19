import { Box, Button, Divider, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

import axios from "axios";

const PracQues = () => {
    
    let si=1;
    const [questions, setQuestions] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:3000/get-completed-competitions')
        .then((response) => {
            console.log(response.data.completedCompetitions);
            for(let i=0;i<response.data.completedCompetitions.length;i++){
                console.log(response.data.completedCompetitions[i].competitionId)
                axios.get(`http://localhost:3000/get-questions/${response.data.completedCompetitions[i].competitionId}`)
                .then((response) => {
                    if(response.data.questionsList.length>0)
                   setQuestions(response.data.questionsList) 
                }
                )
                .catch((error) => {
                    console.log(error);
                }
                )


            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])



   

        



    return (

        <HStack alignItems={'flex-start'} gap="20px" >
        <div>
        <div>
      <Link to={"/"}><Box w={30} h={30} borderRadius={15} bg={"#2ec866"} p={1.5} ml="175px"><FaArrowLeft/></Box></Link>
      {/* Other content */}
    </div>
        <Text fontSize={20} fontWeight={"normal"} mt="50px" ml="175px">Topics</Text>
       <Box pos={'flex'}  ml="100px" bg="#1D1E23" boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)" width="260px"  zIndex={200000} >
       <InputGroup>
            <Input  display="flex"  placeholder="Search Problems" width="240px" ml="10px" h="25px"  mt="10px" bg="#1D1E23" borderWidth="2px"  />
            <InputLeftElement ml="5px">
            <FaSearch color="grey"/>
            </InputLeftElement>
        </InputGroup>
        <Text mt="10px" fontSize={22} ml="20px" fontWeight={"semibold"}> Select Topic</Text>
        <RadioGroup >
        <Stack direction="column" spacing={3} mt="15px" ml="10px">
            <Radio value="option1">Basic Programming</Radio>
            <Radio value="option2">Arrays</Radio>
            <Radio value="option3">Strings</Radio>
            <Radio value="option4">Math</Radio>
            <Radio value="option5">Sorting</Radio>
            <Radio value="option6">Binary Search</Radio>
            <Radio value="option7">Data Structures</Radio>
            <Radio value="option8">Greedy Algorithms</Radio>
            <Radio value="option9">Dynamic Programming</Radio>
            <Radio value="option10">Graphs</Radio>
            <Radio value="option11">Segment Trees</Radio>
            </Stack>       
         </RadioGroup>

        </Box> 
       </div>
       <div>
        <Box bg="#47CF73" h="45px" mt="10px" >
            <HStack display='flex' justifyContent={"space-between"} alignItems={'center'} w="1050px"  px="20px" h="45px">
                <Text fontSize={16} > Topic</Text>
                <Text  fontSize={16} > Name</Text>
                <Text  fontSize={16} > Submission</Text>
                <Flex alignItems={"center"}>
                <Text  mr={1} >Difficulty</Text> 
                <FaArrowUp  color="white" size={16}/>
                </Flex>
                <Text  fontSize={16} ml="10px">Topic</Text>
            </HStack>
        </Box>
          {console.log("question array inside return ",questions)}
       
        {questions.map((question) => (
            
            <Box key={questions.questionId} bg="#1D1E23"  >
            <HStack  display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
                     <Flex ml="10px"  w="100px" display="flex"  >
                        {/* I want to print Si Number after each time it should increase by 1 */}
                        <Text  fontSize={15} >{si++}</Text>     
                        </Flex>
                        <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                        <Text  fontSize={15} color="#5780B0"  >{question.questionName}</Text>
                        </Flex>
                        <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                        <Text  fontSize={15}  >{question.submissionCount}</Text>
                        </Flex>
                            <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                        <Text  fontSize={15}  >{question.Difficulty}</Text>
                        </Flex>
                        <Flex alignItems={"center"} gap="2">
                        <Text  fontSize={15} >{question.Tags}</Text>
                        <FaArrowRight color="#5780B0" size={16}/>
                        </Flex>

                    </HStack>
                    <Divider />
                </Box>
        ))}

        
     
       </div>
       </HStack>
        );
};



export default PracQues