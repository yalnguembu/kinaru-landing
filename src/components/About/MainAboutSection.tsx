import {motion} from "framer-motion";
import {makeToUpVariant} from "@/constants/variants.motion";

export default function MainAboutSection()
{
    return (
        <section className="text-center flex flex-col items-center gap-3">
            <motion.span className="btn-primary-rounded" variants={makeToUpVariant()} initial='hidden' whileInView='visible'>
                A propos
            </motion.span>
            <motion.h2 className="text-3xl" variants={makeToUpVariant({delay: 0.2})} initial='hidden' whileInView='visible'>
                Nous sommes <br/> <span className="text-primary">une application intelligente
            </span>
            </motion.h2>
            <motion.p className="max-w-[500px]" variants={makeToUpVariant({delay: 0.35})} initial='hidden' whileInView='visible'>
                Concu pour repondre a vos besoins, du marché Africain, Kinaru vous offre
                une solution sur mesure pour optimiser la gestion de vos biens locatifs.
            </motion.p>
        </section>
    )
}