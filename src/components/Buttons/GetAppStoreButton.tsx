import Image from "next/image";
import {cn} from "@/libs/utils";

export type GetAppStoreButtonProps = {
    src: string,
    alt?: string,
    href?: string,
    className?: string
}

export default function GetAppStoreButton({src, alt, href, className} : GetAppStoreButtonProps)
{
    return (
        <a href={href} className={cn("bg-gray-950 px-4 py-3 rounded-lg", className)} target="_blank">
            <Image src={src} alt={alt ?? ''} width={120} height={30}/>
        </a>
    )
}