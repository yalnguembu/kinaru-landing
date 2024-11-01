import {PropsWithChildren} from "react";
import './globals.scss'

export default function Layout({children}: PropsWithChildren)
{
    return (
        <html lang="fr">
            <body>
                {children}
            </body>
        </html>
    )
}