import styles from './Button.module.css';

export default function Button({imageData, fetchImages}) {
  
    return (
      <button 
        // className="border-2 border-black p-2 rounded-lg" 
        className={styles.button}
        onClick={fetchImages}
      >
        {imageData ? "Clear Images" : "Fetch 📸"}
      </button>
  );
}
