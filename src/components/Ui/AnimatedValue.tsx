'use client'

import {useEffect, useState} from "react";

export type AnimatedValueProps = {
    value: number,
    start?: number,
    time?: number,
    step?: number
}

export default function AnimatedValue({value, start = 0, time = 10, step = 1}: AnimatedValueProps)
{
    const [val, setVal] = useState<number>(start)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVal(prev => prev >= value ? value : prev + step)
        }, time)
        return () => {
            clearInterval(intervalId)
        }
    }, [value, step, time])

    return (
        <span>{val}</span>
    )
}