import {teams} from "@/app/(default)/about-us/data";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa6";
import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export default function MeetTeamSection()
{
    return (
        <section className="text-center flex flex-col items-center">
            <span className="btn-primary-rounded">Nos Experts</span>
            <h2 className="text-3xl mt-4 mb-10">Decouvrez <span className="text-primary">Notre équipe</span></h2>
            <div className="teams flex flex-col gap-20 md:flex-row">
                {teams.map((user, index) => {
                    const bigSize = 350, smallSize = 170;
                    return (
                        <motion.div
                            key={index}
                            className="teams__user flex flex-col items-center"
                            variants={makeToUpVariant({delay: 0.2 * index})} initial='hidden' whileInView='visible'
                        >
                            <Image
                                src={user.image_url ?? ''}
                                alt={user.name}
                                width={bigSize}
                                height={bigSize}
                                className={`md:w-[${smallSize}px] md:h-[${smallSize}px] xl:w-[${bigSize}px] lg:h-[${bigSize}px]`}
                            />
                            <div className="mt-10">
                                <h3 className='text-primary'>{user.name}</h3>
                                <span className="text-wrap">{user.role}</span>
                            </div>
                            <ul>
                                <li><a href="#"><FaFacebookF size={20}/></a></li>
                                <li><a href="#"><FaTwitter size={20}/></a></li>
                                <li><a href="#"><FaInstagram size={20}/></a></li>
                            </ul>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}