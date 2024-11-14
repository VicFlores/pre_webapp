import React from 'react';
import { ChatBot } from '@/components/ChatBot/ChatBot';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'ChatBot',
  description: 'ChatBot',
};

const ChatBotPage = () => {
  return (
    <>
      <Navbar />

      <ChatBot />
    </>
  );
};

export default ChatBotPage;
