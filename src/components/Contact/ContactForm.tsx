'use client'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ContactSchema} from "@/types/schemas";

export default function ContactForm()
{
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(ContactSchema)
    })

    const onSubmit = () => {
        console.log("onClicked !!")
        reset()
    }

    return (
        <section id="contact-form" className="text-white p-20 rounded-lg before:rounded-xl bg-black/40">
            <div className="text-center flex flex-col gap-3 justify-center items-center mb-5">
                <span className="btn-primary-rounded">Message Us</span>
                <h2 className="text-3xl">Send us a message</h2>
                <p>Fill up form below, our team will get back soon</p>
            </div>
            <form action="#" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3">
                            <input {...register('name')} type='text' name='name' placeholder='Name *'/>
                            <input {...register('email')} type='email' name='email' placeholder='Email *'/>
                            <input {...register('company')} type='text' name='company' placeholder='Company Name'/>
                            <select {...register('country')} name='country'>
                                <option value='India'>India</option>
                                <option value='USA'>USA</option>
                            </select>
                            <input {...register('phone')} type='tel' name='phone' placeholder='Phone'/>
                            <input {...register('website')} type='text' name='website' placeholder='Website'/>
                        </div>
                        <textarea {...register('comment')} placeholder="comment" className="w-full min-h-[150px]"></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <label htmlFor="agreement">
                            <input {...register('agreement')} type="checkbox" id='agreement' name='agreement' />
                            &thinsp; I agree to receive emails, newsletters and promotional messages
                        </label>
                        <button type="submit" className="text-white bg-primary font-bold text-lg px-4 py-2 rounded-lg">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}