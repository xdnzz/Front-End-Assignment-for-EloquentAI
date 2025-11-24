import { ChatCircle, X } from 'phosphor-react';
import styles from './styles.module.css';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? (
        <X weight="bold" className={styles.icon} />
      ) : (
        <ChatCircle weight="fill" className={styles.icon} />
      )}
    </button>
  );
};