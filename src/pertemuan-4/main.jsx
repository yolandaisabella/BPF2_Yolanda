import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <TailwindCSS/> */}
            <UserForm/>
        </div>
    )