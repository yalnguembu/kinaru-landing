import {Variants} from "framer-motion";

export type ToUpVariantOptions = {
    duration?: number,
    delay?: number
}
export const makeToUpVariant = ({duration, delay}: ToUpVariantOptions = {}): Variants => {
    return {
        hidden: { opacity: 0, y: 150},
        visible: { opacity: 1, y: 0, transition: {duration: duration??0.5, delay: delay ?? 0.1}}
    }
}

export type ToLeftVariantOptions = ToUpVariantOptions & { }
export const makeToLeftVariant = ({duration, delay}: ToLeftVariantOptions = {}): Variants => {
    return {
        hidden: {opacity: 0, x: 150},
        visible: { opacity: 1, x: 0, transition: {duration: duration??0.5, delay: delay ?? 0.1}}
    }
}