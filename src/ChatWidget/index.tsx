import { useState } from 'react';
import { ChatButton } from '../ChatButton';
import { ChatWindow } from '../ChatWindow'; 
import styles from './styles.module.css';

interface ChatWidgetProps {
  maintenanceMode?: boolean;
}

export const ChatWidget = ({ maintenanceMode = false }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.widgetContainer}>
      {isOpen && (
        <ChatWindow 
          onClose={() => setIsOpen(false)} 
          maintenanceMode={maintenanceMode} 
        />
      )}
      
      <ChatButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
  );
};