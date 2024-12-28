import {object, string, boolean} from 'yup'

export const ContactSchema = object({
    name        : string().required(),
    email       : string().email().required(),
    company     : string(),
    country     : string().required(),
    phone       : string(),
    website     : string().url(),
    comment     : string().required(),
    agreement   : boolean().default(false)
})