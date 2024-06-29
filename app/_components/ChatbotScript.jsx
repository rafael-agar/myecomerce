'use client';

import { useEffect } from 'react';

const ChatbotScript = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: 'npfYMJgXsI410HRyfoxb-',
      domain: 'www.chatbase.co',
    };

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'npfYMJgXsI410HRyfoxb-');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;

    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatbotScript;
