import {User} from "@/types";
import Image from "next/image";

export type UserAvatarProps = {
    user: User,
    width?: number,
    height?: number
}

export default function UserAvatar({user, height = 32, width = 64}: UserAvatarProps)
{
    return (
        <div className="flex gap-3 items-center">
            <Image src={user.image_url ?? ''} alt={user.name} width={width} height={height}/>
            <div className="flex flex-col text-left">
                <span className="font-bold">{user.name}</span>
                <span className="text-sm">{user.role}</span>
            </div>
        </div>
    )
}