import Image from "next/image";
import ActiveUsersSpin from "@/components/ActiveUsersSpin";

export default function ActiveUserBar()
{
    return (
        <div className="container relative">
            <div className="absolute inset-0 flex items-center">
                <Image src="/assets/images/icons/small-star.png" alt="star" width={20} height={20}/>
                <hr className="flex-1 h-[2px] bg-black border-0"/>
                <Image src="/assets/images/icons/small-star.png" alt="star" width={20} height={20}/>
            </div>
            <div className="left-0 right-0 flex items-center justify-center">
                <ActiveUsersSpin/>
            </div>
        </div>
    )
}