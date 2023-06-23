import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Divider, Flex, EditableTextarea, HStack, Input, Select, Spacer, Text, Textarea, VStack, Grid, Image, Spinner } from "@chakra-ui/react";
import { FaAngleDown, FaArrowAltCircleDown, FaCaretDown, FaCopy, FaDropbox, FaFileDownload, FaRegArrowAltCircleDown, FaSortDown, FaSun } from "react-icons/fa";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [custominput, setCustominput] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');
  const [memory, setMemory] = useState('');
  const [language, setLanguage] = useState('C');
  const [error, setError] = useState('');
  const [loading1, setloading1] = useState(false);
  const [Isthereiscode, setIsthereiscode] = useState(false);

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageRecognition = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('srcImg', selectedImage);
// delay the loading by 10 seconds
    setTimeout(() => {
      setLoading(true );
    }, 10000);
    try {
      const response = await axios.post('http://localhost:3000/recognize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCode(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const scanningAnimationStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
    zIndex: 9999,
  };

  const scanningLineStyle = {
    width: '100%',
    height: '2px',
    backgroundColor: '#0073c7',
    animation: 'scan 2s linear infinite',
    transformOrigin: 'bottom',
  };
  

  const handleSubmitCode = () => {
    setLoading(true);
    const id = getLanguageId(language);
    console.log("Language id is ", id);

    axios.post('http://localhost:3000/submit-code', {
      code: code,
      languageId: getLanguageId(language),
      stdin: custominput,
      expectedOutput: outputFormat,
    })
      .then(response => {
        console.log(response.data);
        const submissionId = response.data.submissionId;
        setIsthereiscode(true);
        axios.get(`http://localhost:3000/submission/${submissionId}`)
          .then(response => {
            setTimeout(() => {
              console.log("inside", response.data);
              console.log("Is there is code", Isthereiscode);
              setOutput(response.data.submissionResult.stdout);
              setStatus(response.data.submissionResult.status.description);
              setTime(response.data.submissionResult.time);
              setMemory(response.data.submissionResult.memory);
              setError(response.data.submissionResult.stderr);

              console.log("Status is ", status);
              console.log("Time is ", time);
              console.log("Memory is ", memory);
              console.log("Loading is inside get ", loading);
              console.log("Output is ", response.data.submissionResult.stdout);
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
  };

  return (
    <div height={"100vh"} bg={'#FFFFFF'} pt={5}>
      <style>
        {`
       @keyframes scan {
        0% {
          transform: translateY(-7500%);
        }
        100% {
          transform: translateY(4000%);
        }
      }
      `}
      </style>
      <Grid templateColumns={{ base: '1fr', md: '3fr 3fr' }} rowGap={10}>
        <Box height={"100vh"} bg={'#FFFFFF'} pt={200}>
          <Text fontWeight="semibold" fontSize={60} textAlign='center' color={"#0073c7"} >Extract Code</Text>
          <Text fontWeight="semibold" fontSize={60} textAlign='center' color={"#0073c7"} mt={-5} >from Image</Text>
          <VStack>
            <h1>Handwriting OCR</h1>
            <Box position="relative">
              {selectedImage && (
               
                  <Image src={URL.createObjectURL(selectedImage)} alt="Selected Image" width="400px" height="200px" border={'1px solid black'} />
             
              )}
              <Button
                colorScheme="blue"
                cursor={'pointer'}
                bg="brand.100"
                as="label"
                htmlFor="imageUpload"
                mb={4}
                pt={2}
                display="block"
              >
                {selectedImage ? 'Change Image' : 'Upload Image'}
                <Input
                  id="imageUpload"
                  type="file"
                  display="none"
                  onChange={handleImageUpload}
                />
              </Button>
              {loading && (
                <div style={scanningAnimationStyle} className="scanning-animation">
                  <div style={scanningLineStyle} className="scanning-line"></div>
                </div>
              )}
            </Box>
            <Button
              colorScheme="blue"
              bg="brand.100"
              onClick={handleImageRecognition}
              disabled={!selectedImage || loading}
            >
              Recognize Handwriting
            </Button>
            {loading && <p>Loading...</p>}
          </VStack>
        </Box>
        <Box height={"100vh"} bg={'#FFFFFF'} pt={20}>
          <Box w="680px" borderWidth={3} bg="#F0F5FF" borderColor={"#0073c7"} borderRadius={15} pt={0}>
            <Box bg="#F0F5FF" borderBottomColor={"#0073c7"} borderWidth={2} w="676px" h="50px" borderRadius={15} borderBottomRadius={0} pt="5px" p={5} display='flex' justifyContent={"space-between"} alignItems={"center"} >
              <Select placeholder={language} bg={"#F0F5FF"} borderWidth={2} borderColor={"#0073c7"} w="162px" h="31px" display={"flex"} color={"#0073c7"} size={12} value="language" onChange={(e) => setLanguage(e.target.value)} borderRadius={9} >
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
                <option value="Js">JS</option>
                <option value="C">C</option>
              </Select>
              <Button h="30px" bg="#0073c7" borderRadius={4} color="white" onClick={handleSubmitCode}>Run</Button>
            </Box>
            <Textarea style={{ scrollbarColor: 'blue' }} color={"#0073c7"} bg={"white"} borderColor={"white"} borderRadius={30} borderWidth={2} value={code} placeholder="Enter Your Code Here" onChange={(event) => { setCode(event.target.value) }} h="450px" w="650px" margin="10px" />
            {Isthereiscode ? (
              <Box>
                <Box bg="#F0F5FF" w="650px" margin="10px" display={loading ? 'none' : 'block'} alignItems={"center"} p="10px">
                  <Flex align="center"></Flex>
                </Box>
                <HStack m="20px" gap="10px" display={loading ? 'none' : 'flex'}>
                  <Text fontSize={14} color={"white"}>Time:<br /> <span fontSize="24px" color="white">{time} Secs</span></Text>
                  <Divider orientation={'vertical'} h="20px" />
                  <Text fontSize={14} color={"white"}>Memory:<br /><span fontSize="24px" color="white">{memory} Mb</span></Text>
                </HStack>
                {error !== null ? (
                  <Box bg="#F0F5FF" w="100%" display={loading ? 'none' : 'block'} alignItems={"center"} p="10px">
                    <Text fontSize={16} color={"white"} fontWeight={'semibold'}>Error : </Text>
                    <Text fontSize={20} color={"white"} ml="10px">{error}</Text>
                  </Box>
                ) : (
                  <></>
                )}
                <Text visibility={loading ? 'hidden' : 'visible'} fontSize={24} ml="15px" color={"#0073c7"}>Output </Text>
                <Box bg="#F0F5FF" w="675px" p="10px" borderLeftRadius={7} borderWidth={2}>
                  {output === null ? (
                    <Text align={"left"} fontSize={16}>{'No Output'}</Text>
                  ) : (
                    <Text align={"left"} fontSize={16}>
                      {loading ? 'Submission On Queue' : output.split("\n").slice(0, 3).map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Text>
                  )}
                </Box>
                <Box display={"flex"} bg="#24262C" h="50px" w="100%" pt="0px" borderWidth={2} >
                  <Button bg="#2EC866" color="white" ml="250px" mt="10px" w="150px" h="30px" borderRadius={5}>Submit</Button>
                </Box>
              </Box>
            ) : (
              <Box bg="#F0F5FF" h="53px" w="676px" mt="30px" pt="0px" display={'flex'} alignItems={'center'} justifyContent={'center'} borderBottomRadius={11} borderWidth={2} borderTopColor={"white"} >
                <Text color={'black'}>Scan the image and press run</Text>
               
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
