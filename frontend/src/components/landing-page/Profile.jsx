import React, { useEffect } from 'react'
import AuthContext from '../../pages/UserPages/AuthContext'
import { Box, Heading,Flex,IconButton,Text, Avatar,Card,CardHeader,CardBody,HStack,Button,Image, Divider } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaUser, FaClock} from 'react-icons/fa'

import axios from 'axios'
import { Link } from 'react-router-dom'
function Profile() {
    const storedAuthData = localStorage.getItem('authData');
 
    const authData = JSON.parse(storedAuthData);
    const uid =authData.uid;
    console.log("profile",uid)
    const { username } = React.useContext(AuthContext); // Get username from the AuthContext
    const [skills,setSkill] = React.useState([]);
    const [profileUrl,setProfileUrl]=React.useState("");
    const [socialLinks,setSocialLinks]=React.useState({})


 

    useEffect(() => {
        axios.get(`http://localhost:3000/profile/${uid}`)
        .then((response) => {
          console.log("response",response);
          console.log(response.data.userProfile.skills)
          setSkill(response.data.userProfile.skills)
          setProfileUrl(response.data.userProfile.profileUrl)
          setSocialLinks(response.data.userProfile.socialLinks)
        

        })
  
  }, []);
  return (
    //  User nte profile details
    <Box display="flex" flexDirection={'row'} width="100%" mt="0px" gap="124px">
        <Flex flexDirection="column" gap="13px">
            <Heading ml="130px" mt="50px" fontSize={35} fontWeight={500} color="white">Profile</Heading>

                <Box pos="relative" w="330px" h="400px" p="10px"  bg="#1C1A25" borderRadius={'20px'} display='flex' flexDirection={'column'} alignItems={'center'}  ml="130px" boxShadow= "inset 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <Box position="relative" display="inline-block">
      <Image src={profileUrl} alt="Profile Picture" borderRadius="full" boxSize="130px" fallbackSrc="https://example.com/user-icon.png" />
      </Box>
              <Text fontSize={'sm'} mb="20px">@{username}</Text>

              <Box w="200px" display="flex" flexDirection={'column'} alignItems="center" gap="10px" textAlign={'left'}>
               <Text fontSize={'sm'}  >Interested Topics</Text>
                {/*generate code add chips here with topics */}
                {skills.map((skill, index) => (
                <Box key={index} display="flex" flexDirection={'row'} gap="10px" mt="5px">
                    <Box bg="#494853" borderRadius={'20px'} p="5px" px="10px">
                        <Text fontSize={'sm'}>{skill}</Text>
                    </Box>

                    
                 
                </Box>
                ))}
               
                {/*now generate code for social media links for github,linkdin,and instagram with icons */}
                <Text fontSize={'sm'} mt={'15px'} >Social Media Links</Text>
                <Box display="flex" pl={7}  flexDirection="row" gap="20px" mt="5px" w="250px" h="55px">
  <Box bg="#494853" borderRadius="20px" p="5px" px="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="50px" h="50px">
  <a href={`https://${socialLinks.githubLink}`} target="_blank" rel="noopener noreferrer">
  <Text fontSize="sm">
    <FaGithub size="25px" />
  </Text>
</a>
  </Box>
  <Box bg="#494853" borderRadius="20px" p="5px" px="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="50px" h="50px">
    <a href={`https://${socialLinks.facebookLink}`} target="_blank" rel="noopener noreferrer">
      <Text fontSize="sm">
        <FaLinkedin size="25px" />
      </Text>
    </a>
  </Box>
  <Box bg="#494853" borderRadius="20px" p="5px" px="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="50px" h="50px">
    <a href={`https://${socialLinks.instagramLink}`} target="_blank" rel="noopener noreferrer">
      <Text fontSize="sm">
        <FaInstagram size="25px" />
      </Text>
    </a>
  </Box>
</Box>
<Divider/>
<Link to={"/profile"}><Box  h={7} bg={"whiteAlpha.001"} w={105} borderRadius={15} borderWidth={0} pl={1.5} pt={0.5} ><Text color={"blue.500"} >View Profile</Text></Box></Link>

                </Box>   
                </Box>

             
        </Flex>
          {/* Ongoing Contest */}
          <Flex flexDirection="column" gap="13px">
          <Heading  mt="50px"  fontSize={35} fontWeight={500} color="white">Ongoing Contest</Heading>
               
                <Box display={'flex'} alignItems={'center'} gap="20px" justifyContent={'space-between'} h="400px" p="20px" bg="#1C1A25"  boxShadow= "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius={'20px'}>
                    <FaChevronLeft></FaChevronLeft>
                    <Card  w="260px" h="310px" bg="#252836">
                        <CardHeader p="0" >
                            <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                                <FaClock color="white" ></FaClock>
                                <Text color="white" fontWeight={100}>4 Days</Text>
                            </Box>
                            <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                        </CardHeader>
                        <CardBody>
                            <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 1</Heading>
                            <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                            <HStack mt="20px" spacing={20}>
                                <Text color="#808191" fontSize={12} >52 Enrolled</Text>
                                <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                            </HStack>

                        </CardBody>
              
                    </Card>


                    <Card  w="260px" h="310px" bg="#252836">
                        <CardHeader p="0" >
                            <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                                <FaClock color="white" ></FaClock>
                                <Text color="white" fontWeight={100}>6 Days</Text>
                            </Box>
                            <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                        </CardHeader>
                        <CardBody>
                            <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 2</Heading>
                            <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                            <HStack mt="20px" spacing={20}>
                                <Text color="#808191" fontSize={12} >32 Enrolled</Text>
                                <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                            </HStack>

                        </CardBody>
              
                    </Card>

                    <Card  w="260px" h="310px" bg="#252836">
                        <CardHeader p="0" >
                            <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                                <FaClock color="white" ></FaClock>
                                <Text color="white" fontWeight={100}>10 Days</Text>
                            </Box>
                            <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                        </CardHeader>
                        <CardBody>
                            <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 3</Heading>
                            <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                            <HStack mt="20px" spacing={20}>
                                <Text color="#808191" fontSize={12} >20 Enrolled</Text>
                                <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                            </HStack>

                        </CardBody>
              
                    </Card>


                    <FaChevronRight></FaChevronRight>
                </Box>

            </Flex>
    </Box>
  )
}

export default Profile
