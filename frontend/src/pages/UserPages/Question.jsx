import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Divider,Flex, EditableTextarea, HStack, Input, Select, Spacer, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaAngleDown, FaArrowAltCircleDown, FaCaretDown, FaCopy, FaDropbox, FaFileDownload, FaRegArrowAltCircleDown, FaSortDown, FaSun } from "react-icons/fa";


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [custominput, setCustominput] = useState('');
  
  const [outputFormat, setOutputFormat] = useState('');

  const [code, setCode] = useState(false);
  const [output, setOutput] = useState('');
  console.log("Output is ",output);
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');
  const [memory, setMemory] = useState('');
  const [language, setLanguage] = useState('C');
  const [error, setError] = useState('');
  const [loading1, setloading1] = useState(false);



  
  const [Isthereiscode, setIsthereiscode] = useState(false);
  function getLanguageId(language) {
      console.log("Language is ",language);
      // Map language to language ID
      switch (language) {
        case "Java":
          return 62;
        case "Python":
          return 70;
        case "C++":
          return 54;
        case "Js":
          return 63;
        case "C":
          return 50;
        default:
          return 50; // Default to C++
      }
    }


  function handleSubmitCode() {
      setLoading(true);
      const id=getLanguageId(language);
      console.log("Language id is ",id);

      axios.post('http://localhost:3000/submit-code', {

        code: code,
        languageId: getLanguageId(language),
        //if custominput is not null then pass it else pass inputformat
        stdin:  custominput ,
        expectedOutput:outputFormat,
      })
        .then(response => {
          console.log(response.data);
          const submissionId = response.data.submissionId;
          setIsthereiscode(true);
          axios.get(`http://localhost:3000/submission/${submissionId}`)
            .then(response => {
              setTimeout(() => {

              console.log("inside",response.data);
              console.log("Is there is code",Isthereiscode);      
              setOutput(response.data.submissionResult.stdout);
              setStatus(response.data.submissionResult.status.description);
              setTime(response.data.submissionResult.time);
              setMemory(response.data.submissionResult.memory);
              setError(response.data.submissionResult.stderr);

             

              console.log("Status is ",status);
              console.log("Time is ",time);
              console.log("Memory is ",memory);
              console.log("Loading is inside get ",loading);
              console.log("Output is ",response.data.submissionResult.stdout);
              setloading(false);
              }, 2000);
              setLoading(false);
           
             
      
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          console.error(error);
        });


        
    }

  

  function handleImageUpload(event) {
    setSelectedImage(event.target.files[0]);
  }

  async function handleImageRecognition() {
    setLoading(true);

    const formData = new FormData();
    formData.append('srcImg', selectedImage);

    try {
      const response = await axios.post('http://localhost:3000/recognize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCode(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div>
      <HStack ml={130} display={'flex'} >
        <VStack w={580}>
      <h1>Handwriting OCR</h1>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleImageRecognition} disabled={!selectedImage || loading}>
        Recognize Handwriting
      </button>
      {loading && <p>Loading...</p>}
      {result && (
        <div>
          <h2>Recognition Result:</h2>
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
        </div>
      )}
      </VStack>

      <Box w="680px"  bg="#1D1E23" borderWidth={3}> 
            <Box bg="#24262C" w="680px" h="50px" borderRadius={2} pt="5px" p={5} display='flex' justifyContent={"space-between"} alignItems={"center"}>
            
         
            <Select placeholder={language}  w="162px"  h="31px" display={"flex"} color={"grey"} size={12} value="language" onChange={(e)=>setLanguage(e.target.value)}>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="Js">JS</option>
            <option value="C">C</option>
            </Select>
            <Button h="30px" bg="#2EC866" borderRadius={4}  color="white" onClick={handleSubmitCode}>Run</Button>
           
      

            </Box>
           
            <Textarea value={code} placeholder="Enter Your Code Here" onChange={(event) => {setCode(event.target.value)}}  h="400px"w="650px" margin="10px"/>
            
          
           
            { Isthereiscode?<Box > 
             
             <Box bg="#F8F8F8"  w="650px" margin="10px" display={loading?'none':'block'}  alignItems={"center"} p="10px">
                   <Flex align="center">
                        
             
                    </Flex>
             </Box>
                <HStack m="20px" gap="10px"  display={loading?'none':'flex'}>
                    <Text fontSize={14} color={"white"}>Time:<br /> <span fontSize="24px" color="white">{time} Secs</span></Text>
                    <Divider orientation={'vertical'} h="20px"/>
                    <Text fontSize={14} color={"white"}>Memory:<br/><span fontSize="24px" color="white">{memory} Mb</span></Text>
                </HStack>
                {error!==null?<Box bg="#F8F8F8"  w="100%" display={loading?'none':'block'}  alignItems={"center"} p="10px">
                    <Text fontSize={16} color={"black"} fontWeight={'semibold'}>Error : </Text>
                    <Text fontSize={20} color={"black"}  ml="10px">{error}</Text>
                </Box>:<></>}
                <Text visibility={loading?'hidden':'visible'} fontSize={24} ml="15px" color={"white"} >Output </Text>
                <Box bg="#24262C" w="675px"  p="10px" borderLeftRadius={7} borderWidth={2}>
                  {output === null ? <Text align={"left"} fontSize={16} >{'No Output'}</Text>:
                <Text align={"left"} fontSize={16} >{loading?'Submission On Queue': output.split("\n").slice(0,3).map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}</Text>
                }
                </Box>
                {/* <Link to={`/compques/${competitionId}`}> */}
                <Box display={"flex"} bg="#24262C" h="50px" w="100%" pt="0px" borderWidth={2} >
                <Button  bg="#2EC866" color="white" ml="250px" mt="10px" w="150px" h="30px" borderRadius={5}>Submit</Button>
                </Box>
                {/* </Link> */}
                </Box>:
               <Box bg="#24262C" h="50px" w="675px" mt="30px" pt="0px" borderLeftRadius={7} borderWidth={2}>
                <Text align={"center"} mt="10px">{'WA Failed Test Cases is available for this problem'}</Text>
            </Box>}
            {/* button to submit cod */}
         

      
           
            
            
         
            
            </Box>



      </HStack>
    </div>
  );
}

export default App;
