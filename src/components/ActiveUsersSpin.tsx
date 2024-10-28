import Image from "next/image";
import {FaArrowDownLong} from "react-icons/fa6";

export default function ActiveUsersSpin()
{
    return (
        <div className="relative p-3 bg-black rounded-full">
            <Image
                src="/assets/images/icons/active-users-rounded-text.png"
                alt="active-users"
                width={128}
                height={20}
                className="animate-spin-low"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="p-7 bg-primary rounded-full">
                    <FaArrowDownLong size={26} color="white"/>
                </span>
            </div>
        </div>
    )
}