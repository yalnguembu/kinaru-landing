'use client'

import {ComponentProps, ReactNode} from "react";
import {cn} from "@/libs/utils";
import Image from "next/image";
import {FaCheckCircle} from "react-icons/fa";

export type SomeComponentProps = ComponentProps<'div'> & {
    image: string,
    tag: string,
    icon?: ReactNode,
    title: string,
    description: string,
    actionText: string,
    actionUrl?: string,
    data: string[]
}

export default function SomeComponent({image, tag, icon, title, description, actionUrl, actionText, className, data = [], ...props}: SomeComponentProps)
{
    const titleArr = title.split(' ')

    return (
        <div className={cn(
            "flex flex-col md:flex-row gap-10 justify-evenly items-center",
            "text-left", className
        )} {...props}>
            <Image
                src={image}
                alt={tag}
                width={400}
                height={100}
            />
            <div className="max-w-[80%] md:max-w-[50%] flex flex-col gap-7">
                <span className="btn-secondary-rounded flex gap-3">{icon} {tag}</span>
                <h2 className="text-2xl"><span className="text-primary">{titleArr.splice(0,2).join(' ')}</span>&thinsp;{titleArr.join(' ')}</h2>
                <p>{description}</p>
                <ul>
                    {data.map((text, index) => {
                        return (
                            <li key={index}><FaCheckCircle className="text-primary inline"/>&thinsp;{text}</li>
                        )
                    })}
                </ul>
                <a href={actionUrl ?? '#'} className="btn-action">{actionText}</a>
            </div>
        </div>
    )
}