import {PropsWithChildren} from "react";
import './globals.scss'

export default function Layout({children}: PropsWithChildren)
{
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}