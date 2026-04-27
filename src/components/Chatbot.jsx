import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import clinicData from '../data/data.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your dental assistant. How can I help you today?' }
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

  const createContextPrompt = () => {
    return `You are a helpful dental clinic assistant for White & Bright Dental Clinic. Here is the clinic information:

Clinic Name: ${clinicData.clinic.name}
Doctor: ${clinicData.doctor.name} (${clinicData.doctor.qualification})
Experience: ${clinicData.doctor.experience}
Phone: ${clinicData.clinic.phone}
Address: ${clinicData.clinic.address}

Working Hours:
- ${clinicData.workingHours.weekdays.days}: ${clinicData.workingHours.weekdays.morning} & ${clinicData.workingHours.weekdays.evening}
- ${clinicData.workingHours.sunday.day}: ${clinicData.workingHours.sunday.timing}

Services Offered:
${clinicData.services.map(s => `- ${s.name}: ${s.description}`).join('\n')}

Statistics:
- Patient Referral Rate: ${clinicData.statistics.referralRate}
- Treated Patients: ${clinicData.statistics.treatedPatients}
- Services: ${clinicData.statistics.services}
- Experience: ${clinicData.statistics.experience} years

Answer questions naturally and professionally. If asked about appointments, guide them to call ${clinicData.clinic.phone} or use the Book Appointment page.`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const models = [
      'nousresearch/hermes-3-llama-3.1-405b:free',
      'google/gemini-flash-1.5',
      'openai/gpt-3.5-turbo'
    ];

    for (const model of models) {
      try {
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
        
        if (!apiKey) {
          throw new Error('❌ API key not configured');
        }

        const requestBody = {
          model: model,
          messages: [
            { role: 'system', content: createContextPrompt() },
            ...messages.filter(m => m.role !== 'system'),
            userMessage
          ],
        };

        console.log('📤 Trying model:', model);

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'White & Bright Dental Clinic'
          },
          body: JSON.stringify(requestBody),
        });

        console.log('📥 Response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('❌ API Error:', errorData);
          continue;
        }

        const data = await response.json();
        console.log('✅ Success with model:', model);
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          throw new Error('Invalid response format');
        }

        const assistantMessage = {
          role: 'assistant',
          content: data.choices[0].message.content
        };

        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
        return;
      } catch (error) {
        console.error('❌ Error with model', model, ':', error.message);
        if (model === models[models.length - 1]) {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: 'I apologize, but I\'m having trouble connecting right now. Please call us at ' + clinicData.clinic.phone + ' for immediate assistance.'
          }]);
        }
      }
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-bounce-slow"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Bot size={24} className="text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold">Dental Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${msg.role === 'user' ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-700 dark:text-gray-300" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${msg.role === 'user' ? 'bg-primary-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700 rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
