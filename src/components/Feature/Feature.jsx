import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-4 "><FaCheckCircle></FaCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;