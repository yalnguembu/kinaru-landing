import {ReactNode} from "react";

export type ContactItemProps = {
    icon: ReactNode,
    label: string,
    text: string,
    href?: string
}

export default function ContactItem({icon, label, text, href}: ContactItemProps)
{
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="bg-primary rounded-lg p-3 w-fit text-white">{icon}</div>
            <div className="flex flex-col text-center">
                <span>{label}</span>
                <a className="font-bold text-xl hover:text-primary" href={href ?? ''}>{text}</a>
            </div>
        </div>
    )
}