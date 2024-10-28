'use client'

import {useEffect, useState} from "react";
import {Faq} from "@/types";
import {fetchQuestions} from "@/app/(default)/faq/actions";
import {Accordion, AccordionProvider} from "@/components/Ui/Accordion";

export default function FaqContent()
{
    const [questions, setQuestions] = useState<Faq[]>([])
    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data))
    }, []);

    return (
        <div id="faq" className="container">
            <section className="flex flex-col gap-3 items-center text-center">
                <span className="btn-primary-rounded">Questions & Reponses</span>
                <h2><span className="text-primary">FAQs</span> - Les questions les plus posées</h2>
                <AccordionProvider>
                    <div className="columns-1 md:columns-2 h-full w-full mt-3">
                        {questions.map(({question, answer}, index) => {
                            return (
                                <div className="mb-5" key={index}>
                                    <Accordion label={question} content={answer}/>
                                </div>
                            )
                        })}
                    </div>
                </AccordionProvider>
            </section>
        </div>
    )
}