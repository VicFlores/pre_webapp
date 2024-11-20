'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatBot.module.css';
import Image from 'next/image';

export const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://preapi-production.up.railway.app/chatbot');
    setSocket(ws);

    ws.onopen = () => {
      console.log('WebSocket connection opened');
      setMessages([]); // Clear messages when WebSocket connection is opened
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message.message]);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
      setMessages([]); // Clear messages when WebSocket connection is closed
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = () => {
    if (socket && input) {
      const messageObject = { message: input };
      socket.send(JSON.stringify(messageObject));
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const renderMessage = (message: string) => {
    const urlRegex = /(https:\/\/pre-webapp.vercel.app\/accommodation\/\d+)/g;
    const parts = message.split(urlRegex);
    const uniqueUrls = new Set<string>();

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        if (!uniqueUrls.has(part)) {
          uniqueUrls.add(part);

          return (
            <Link key={index} href={part} target='_blank'>
              {part}
            </Link>
          );
        }
      }
      return part;
    });
  };

  return (
    <section className={styles.chatContainer}>
      <h1 className={styles.title}>Chatea con nuestro asistente virtual 🤖</h1>

      <div className={styles.messageContainer}>
        {messages.length === 0 ? (
          <figure className={styles.noMessagesImage}>
            <Image src={'/chatbot.svg'} alt='No messages' layout='fill' />
          </figure>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={styles.message}>
              {renderMessage(message)}
            </div>
          ))
        )}
        <div ref={messageEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Updated to onKeyDown
        />

        <button onClick={sendMessage}>Enviar</button>
      </div>
    </section>
  );
};
