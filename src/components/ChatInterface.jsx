import { useState, useRef, useEffect } from 'react';

function ChatInterface({ feature, context }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm your ${context} learning assistant. I'm here to help you with ${feature.title}. ${feature.description}. What would you like to learn today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: generateResponse(input, context, feature)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query, ctx, feat) => {
    // Placeholder response logic - replace with actual AI API
    const responses = {
      technical: {
        'code-explain': 'I can help explain code! Share a code snippet and I\'ll break it down step by step, explaining what each part does and why.',
        'debug-helper': 'Let\'s debug together! Describe the issue you\'re facing, share any error messages, and I\'ll help identify the problem and suggest solutions.',
        'doc-helper': 'I\'ll help with documentation! Whether you need to write docs or understand existing ones, just let me know what you\'re working with.',
        'architecture': 'Let\'s discuss system design! Tell me about your project requirements and I\'ll help you think through the architecture.'
      },
      'non-technical': {
        'concept-simplify': 'I\'ll simplify any concept for you! Share what you\'re trying to understand and I\'ll break it down into easy-to-grasp pieces.',
        'tutor': 'I\'m your personal tutor! What subject would you like to learn? I\'ll create a structured learning path for you.',
        'summarizer': 'I can help organize information! Share what you need summarized or organized and I\'ll structure it clearly.',
        'skill-builder': 'Let\'s build your skills! Tell me what skill you want to develop and I\'ll create a learning roadmap with actionable steps.'
      }
    };

    return responses[ctx]?.[feat.id] || 'I\'m here to help! Please tell me more about what you\'d like to learn or accomplish.';
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
