import clsx from "clsx";
import styles from "./button.module.scss";

const Button = ({ children, secondary = false, active = false, disabled = false}) => {
  return (
    <button 
        className={clsx({
            [styles.btn]: true, 
            [styles.active]: active, 
            [styles.disabled]: disabled,
            [styles.secondary]: secondary})} >
        {children}
    </button>
    );
};

export default Button;
