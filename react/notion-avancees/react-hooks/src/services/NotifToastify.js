/**
 * notifications toastify
 */
import { toast } from "react-toastify";

// to top right notif
export function notifyToTopRight(type, message) {
    switch(type) {
        case 'info':
            toast.info(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;
            
        case 'error':
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;

        case 'success':
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            break;

        default:
            toast(message, {
                position: toast.POSITION.TOP_RIGHT
            })
    }
}

// to top left notif
export function notifyToTopLeft(type, message) {

}

// to top center notif
export function notifyToTopCenter(type, message) {

}

// bottom lef

// bottom center

// bottom right