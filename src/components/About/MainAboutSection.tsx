
export default function MainAboutSection()
{
    return (
        <section className="text-center flex flex-col items-center gap-3">
            <span className="btn-primary-rounded">A propos</span>
            <h2 className="text-3xl">Nous sommes <br/> <span className="text-primary">une application intelligente</span>
            </h2>
            <p className="max-w-[500px]">
                Concu pour repondre a vos besoins, du marché Africain, Kinaru vous offre
                une solution sur mesure pour optimiser la gestion de vos biens locatifs.
            </p>
        </section>
    )
}