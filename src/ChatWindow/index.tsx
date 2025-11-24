import { useState, useRef, useEffect } from 'react';
import { X, PaperPlaneTilt, SpinnerGap, Warning } from 'phosphor-react';
import styles from './styles.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWindowProps {
  onClose: () => void;
  maintenanceMode?: boolean; 
}

export const ChatWindow = ({ onClose, maintenanceMode = false }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am the Eloquent AI. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || maintenanceMode) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'This is a simulated response. We will be connected to the real API soon!',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.window}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h3>Eloquent AI</h3>
          <span>
            <span 
              className={styles.statusIndicator} 
              style={{ backgroundColor: maintenanceMode ? '#eab308' : '#2ecc71' }} 
            />
            {maintenanceMode ? 'Maintenance' : 'Online'}
          </span>
        </div>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={20} />
        </button>
      </div>

      {/* LISTA DE MENSAGENS */}
      <div className={styles.messageList}>
        {messages.map((msg) => (
          <div key={msg.id} className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}>
            {msg.text}
          </div>
        ))}

        {isLoading && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Typing</span>
              <SpinnerGap className={styles.spin} size={14} /> 
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* BANNER DE MANUTENÇÃO */}
      {maintenanceMode && (
        <div className={styles.maintenanceBanner}>
          <Warning size={16} weight="bold" />
          Chat is temporarily unavailable.
        </div>
      )}

      {/* ÁREA DE INPUT */}
      <form 
        className={`${styles.inputArea} ${maintenanceMode ? styles.disabled : ''}`} 
        onSubmit={handleSendMessage}
      >
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={maintenanceMode ? "Chat paused" : "Type your message..."}
          className={styles.input}
          disabled={isLoading || maintenanceMode} 
        />
        <button 
          type="submit" 
          className={styles.sendButton}
          disabled={!inputValue.trim() || isLoading || maintenanceMode}
        >
          <PaperPlaneTilt size={20} weight="fill" />
        </button>
      </form>

      {/* --- PROTEÇÃO: RODAPÉ DE COPYRIGHT --- */}
      {/* Isso garante que eles não possam usar em produção sem editar o código fonte */}
      <div style={{
        padding: '8px',
        textAlign: 'center',
        fontSize: '10px',
        color: '#999',
        borderTop: '1px solid #eee',
        background: '#f9f9f9',
        lineHeight: '1.4'
      }}>
        © 2025 Danilo Diniz - Technical Assessment Copy. <br/> 
        Not for commercial or production use.
      </div>

    </div>
  );
};