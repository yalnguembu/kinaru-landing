import {Pricing} from "@/types";

export async function fetchPricings()
{
    return Promise.resolve([
        {
            name: 'Basic',
            appliers: 'For single users',
            price: 15,
            storage: 10,
            chatHistory: 30,
            optimization: false,
            unlimitedViewers: false,
            liveReporting: 30,
            supportDays: 30
        },
        {
            name: 'Premium',
            appliers: 'For agencies',
            price: 15,
            storage: 100,
            chatHistory: -1,
            optimization: true,
            unlimitedViewers: true,
            liveReporting: 90,
            supportDays: 90
        },
        {
            name: 'Standard',
            appliers: 'For team',
            price: 30,
            storage: 30,
            chatHistory: 60,
            optimization: true,
            unlimitedViewers: true,
            liveReporting: 60,
            supportDays: 60
        },
    ] as Pricing[])
}