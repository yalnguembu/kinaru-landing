'use client'

import {statsValues} from "@/app/(default)/about-us/data";
import {cn} from "@/libs/utils";
import AnimatedValue from "@/components/Ui/AnimatedValue";

export default function CompanyStatsSection()
{
    return (
        <section className="ads-container p-14 rounded-xl before:rounded-xl flex flex-col gap-3 items-center">
            <span className="btn-primary-rounded">Pourquoi nous ?</span>
            <h2 className="text-3xl text-white">Nos statistiques</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
                {statsValues.map((item, index) => {
                    const isEven = index % 2 === 0
                    return (
                        <li key={index}
                            className={cn(
                                "rounded-full bg-white/85 w-[200px] h-[200px] flex items-center justify-center border border-primary",
                                "md:w-[150px] md:h-[150px]",
                                (!isEven) ? '-translate-x-7 -z-0' : 'translate-x-7 z-10',
                                (!isEven) ? 'md:translate-x-0' : 'md:translate-x-0',
                            )
                            }>
                            <div className="flex flex-col items-center font-bold">
                                <span className="text-primary text-2xl">
                                    <AnimatedValue
                                        value={item.number}
                                        step={item.step ?? 1}
                                        start={item.start ?? 0}
                                        time={item.time ?? 10}
                                    />{item.letter}</span>
                                <b>{item.name}</b>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}