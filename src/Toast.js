import styles from './Toast.module.css'

const Toast = ({ toastlist, position, onClose }) => {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastlist.map((toast, index) => (
        <div
          key={index}
          className={`${styles.notification} ${styles.toast} ${styles[position]}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
            <button onClick={onClose}>Close</button>
            <div>
                <p>{toast.title}</p>
                <p>{toast.description}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
