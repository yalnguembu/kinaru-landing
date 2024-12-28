import {FaStar} from "react-icons/fa6";

export type StarsProps = {
    count?: number,
    stars: number,
    starColor?: string,
    otherColor?: string,
    size?: number
}

export default function Stars({stars, size = 16, count = 5, starColor = "gold", otherColor = "gray"}: StarsProps)
{
    return (
        <div className="flex gap-1 w-fit mx-auto">
            {new Array(count).fill(0).map((_, index) => {
                return (
                    <span key={index}><FaStar size={size} color={index < stars ? starColor : otherColor} /></span>
                )
            })}
        </div>
    )
}