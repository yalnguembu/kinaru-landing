'use client'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ContactSchema} from "@/types/schemas";

export default function ContactForm()
{
    const {register, reset, handleSubmit} = useForm({
        resolver: yupResolver(ContactSchema)
    })

    const onSubmit = () => {
        console.log("onClicked !!")
        reset()
    }

    return (
        <section id="contact-form" className="text-white p-20 rounded-lg before:rounded-xl bg-black/40">
            <div className="text-center flex flex-col gap-3 justify-center items-center mb-5">
                <span className="btn-primary-rounded">Envoyez un message</span>
                <h2 className="text-3xl">Envoyez nous un message</h2>
                <p>Remplissez le formulaire ci-dessous pour nous envoyez un message.</p>
            </div>
            <form action="#" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3">
                            <input {...register('name')} type='text' name='name' placeholder='Nom *'/>
                            <input {...register('email')} type='email' name='email' placeholder='Email *'/>
                            <input {...register('company')} type='text' name='company' placeholder='Companie'/>
                            <select {...register('country')} name='country'>
                                <option value='India'>Cameroun</option>
                                <option value='USA'>USA</option>
                            </select>
                            <input {...register('phone')} type='tel' name='phone' placeholder='Telephone'/>
                            <input {...register('website')} type='text' name='website' placeholder='SiteWeb'/>
                        </div>
                        <textarea {...register('comment')} placeholder="Commentaire" className="w-full min-h-[150px]"></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <label htmlFor="agreement">
                            <input {...register('agreement')} type="checkbox" id='agreement' name='agreement' />
                            &thinsp; Je soushate recevoir des mails en guise de reponse.
                        </label>
                        <button type="submit" className="text-white bg-primary font-bold text-lg px-4 py-2 rounded-lg">Envoyez</button>
                    </div>
                </div>
            </form>
        </section>
    )
}