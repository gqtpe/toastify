import "./ToastList.css";
import {FC, useEffect, useRef} from "react";
import Toast from "../Toast/Toast.tsx";

export interface IToast {
    id: number;
    message: string;
    type: 'success' | 'failure' | 'warning'
}
export type Position = 'top--left' | 'top--right' | 'bottom-left' | 'bottom-right'
type Props = {
    data: IToast[]
    position: Position
    removeToast: (toastID: number) => void
}
const ToastList: FC<Props> = ({data, position, removeToast}) => {
    const listRef = useRef(null)

    const handleScrolling = (el:any) => {
        const isTopPosition = ["top-left", "top-right"].includes(position);
        if (isTopPosition) {
            el?.scrollTo(0, el.scrollHeight);
        } else {
            el?.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        handleScrolling(listRef.current);
    }, [position, data]);


    const sortedData = position.includes("bottom")
        ? [...data].reverse()
        : [...data];
    return (
        sortedData.length > 0 && (
            <div
                className={`toast-list toast-list--${position}`}
                aria-live="assertive"
            >
                {sortedData.map(toast => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        )
    );
}

export default ToastList;