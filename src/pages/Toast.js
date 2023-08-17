import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export function Toast (type, msg) {
     toast[type](msg,{autoClose:1500});
}