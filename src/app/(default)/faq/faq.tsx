'use client'

import {useEffect, useState} from "react";
import {Faq} from "@/types";
import {fetchQuestions} from "@/app/(default)/faq/actions";
import {Accordion, AccordionProvider} from "@/components/Ui/Accordion";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export default function FaqContent()
{
    const [questions, setQuestions] = useState<Faq[]>([])
    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data))
    }, []);

    return (
        <div id="faq" className="container">
            <section className="flex flex-col gap-3 items-center text-center">
                <motion.span className="btn-primary-rounded" variants={makeToUpVariant()} initial='hidden' whileInView='visible'>
                    Questions & Reponses
                </motion.span>
                <motion.h2 variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                    <span className="text-primary">FAQs</span> - Les questions les plus posées
                </motion.h2>
                <AccordionProvider>
                    <div className="columns-1 md:columns-2 h-full w-full mt-3">
                        {questions.map(({question, answer}, index) => {
                            return (
                                <motion.div className="mb-5" key={index} variants={makeToUpVariant({delay: 0.15 * index})} initial='hidden' whileInView='visible'>
                                    <Accordion label={question} content={answer}/>
                                </motion.div>
                            )
                        })}
                    </div>
                </AccordionProvider>
            </section>
        </div>
    )
}