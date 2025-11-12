// src/pages/Messages/Messages.tsx
import React, { useState } from 'react';
import './Messages.css';

function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState('');

  // Sample conversations (later will come from backend)
  const conversations = [
    {
      id: 1,
      name: 'Sarah Kumar',
      avatar: '👩',
      lastMessage: 'Is the jacket still available?',
      time: '2m ago',
      unread: 2,
      messages: [
        { id: 1, sender: 'them', text: 'Hi! Is the vintage denim jacket still available?', time: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Yes, it is! Would you like more photos?', time: '10:32 AM' },
        { id: 3, sender: 'them', text: 'Is the jacket still available?', time: '10:35 AM' },
      ]
    },
    {
      id: 2,
      name: 'Raj Patel',
      avatar: '👨',
      lastMessage: 'Great, I will buy it!',
      time: '1h ago',
      unread: 0,
      messages: [
        { id: 1, sender: 'them', text: 'What is the condition of the dress?', time: 'Yesterday' },
        { id: 2, sender: 'me', text: 'It is in excellent condition, worn only twice.', time: 'Yesterday' },
        { id: 3, sender: 'them', text: 'Great, I will buy it!', time: 'Yesterday' },
      ]
    },
    {
      id: 3,
      name: 'Priya Singh',
      avatar: '👩',
      lastMessage: 'Thank you for the quick delivery!',
      time: '2d ago',
      unread: 0,
      messages: [
        { id: 1, sender: 'them', text: 'Thank you for the quick delivery!', time: '2 days ago' },
        { id: 2, sender: 'me', text: 'You are welcome! Enjoy your new boots!', time: '2 days ago' },
      ]
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim() && selectedConversation) {
      console.log('Sending message:', messageText);
      // Here you would add the message to the conversation
      setMessageText('');
    }
  };

  const selectedChat = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="messages-page">
      <div className="messages-container">
        {/* Left Sidebar - Conversations List */}
        <div className="conversations-sidebar">
          <div className="conversations-header">
            <h2>Messages</h2>
          </div>
          <div className="conversations-list">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${selectedConversation === conversation.id ? 'active' : ''}`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="conversation-avatar">{conversation.avatar}</div>
                <div className="conversation-info">
                  <div className="conversation-header-row">
                    <h3 className="conversation-name">{conversation.name}</h3>
                    <span className="conversation-time">{conversation.time}</span>
                  </div>
                  <div className="conversation-preview-row">
                    <p className="conversation-preview">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <span className="unread-badge">{conversation.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Chat Window */}
        <div className="chat-window">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-header-info">
                  <div className="chat-avatar">{selectedChat.avatar}</div>
                  <h3 className="chat-name">{selectedChat.name}</h3>
                </div>
              </div>

              {/* Messages Area */}
              <div className="messages-area">
                {selectedChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.sender === 'me' ? 'message-sent' : 'message-received'}`}
                  >
                    <div className="message-bubble">
                      <p className="message-text">{message.text}</p>
                      <span className="message-time">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="message-input-container">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="message-input"
                />
                <button type="submit" className="send-button">
                  Send
                </button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              <h3>Select a conversation to start messaging</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;