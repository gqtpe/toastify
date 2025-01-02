import {FC} from "react";
import "./Toast.css";
type Props = {
    message: string
    type: 'success'|'failure'|'warning'
    onClose: () =>void
}
import {
    SuccessIcon,
    FailureIcon,
    WarningIcon,
    CloseIcon,
} from "../Icons/Icons";


const iconMap = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
};
const Toast:FC<Props> = ({message, type, onClose}) => {

    const toastIcon = iconMap[type] || null;
    return (
        <div className="toast" role="alert">
            <div className="toast-message">
                {toastIcon && (<div className="icon icon--lg icon--thumb">{toastIcon}</div>)}
                <p>{message}</p>
            </div>
            <button className="toast-close-btn" onClick={onClose}>
                <span className="icon"><CloseIcon/></span>
            </button>
        </div>
    );
};

export default Toast;