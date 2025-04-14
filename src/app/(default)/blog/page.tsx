import BlogContent from "@/app/(default)/blog/blog";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Kinaru - Actualités et Conseils Immobiliers au Cameroun',
    description: 'Découvrez nos articles sur l\'immobilier au Cameroun et en Afrique Centrale. Conseils, tendances du marché, guides pratiques et actualités du secteur immobilier.',
    keywords: 'blog immobilier, actualités Kinaru, conseils immobilier Cameroun, marché CEMAC, guide locataires, astuces propriétaires, tendances Douala, investissement immobilier',
    openGraph: {
        title: 'Blog Kinaru - Actualités et Conseils Immobiliers',
        description: 'Restez informé des dernières tendances et conseils sur l\'immobilier au Cameroun et en Afrique Centrale avec le blog Kinaru.',
        url: 'https://www.kinaru.app/blog',
        siteName: 'Kinaru',
        images: [
            {
                url: 'https://www.kinaru.app/images/blog-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Blog Kinaru Immobilier',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog Kinaru - Actualités et Conseils Immobiliers',
        description: 'Restez informé des dernières tendances et conseils sur l\'immobilier au Cameroun et en Afrique Centrale avec le blog Kinaru.',
        images: ['https://www.kinaru.app/images/blog-twitter.jpg'],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function Blog()
{
    return (
        <BlogContent />
    )
}
