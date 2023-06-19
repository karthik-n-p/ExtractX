import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Input, Button, VStack } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const sendMessage = async () => {
    if (userInput.trim() === '') {
      return;
    }

    const userMessage = {
      text: userInput,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);
    setUserInput('');
    setIsBotTyping(true);

    try {
      const response = await axios.post('http://localhost:3000/chat', {
        prompt: userInput,
      });

      const botMessage = {
        text: response.data.message,
        sender: 'bot',
      };

      setTimeout(() => {
        setMessages([...messages, userMessage, botMessage]);
        setIsBotTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  const typingAnimationCSS = `
    .typing-animation {
      display: inline-block;
      overflow: hidden;
      width: 0;
    }

    .typing-animation span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2ec866;
      margin-right: 5px;
      animation: typing 1s infinite;
    }

    @keyframes typing {
      0% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.5;
      }
    }
  `;

  return (
    <div>
      <style>{typingAnimationCSS}</style>

      <Link to="/">
        <Box w={30} h={30} borderRadius={15} bg="#2ec866" p={1.5} ml="175px">
          <FaArrowLeft />
        </Box>
      </Link>

      <Box
        ml="350px"
        className="chatbot-container"
        w="1000px"
        h="650px"
        bg="#2d3748"
        borderRadius="5px"
        overflow="hidden"
      >
        <Box
          id="chat-window"
          className="chat-window"
          h="540px"
          p="10px"
          borderWidth={3}
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '18px',
              backgroundColor: '#808191',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#555555',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#2ec866',
            },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              className={`message ${message.sender}`}
              bg="#1a202c"
              borderRadius="20px"
              p="10px"
              mb="10px"
            >
              {message.text}
            </Box>
          ))}
          {isBotTyping && (
            <Box className="message bot typing-animation">
              <span></span>
              <span></span>
              <span></span>
            </Box>
          )}
        </Box>
        <VStack className="user-input" p="10px" bg="#2d3748" spacing="10px">
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            borderRadius="5px"
            bg="#1a202c"
          />
          <Button onClick={sendMessage} color="black" bg="#2ec866">
            Send
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default Chatbot;
