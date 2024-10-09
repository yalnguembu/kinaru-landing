
export type Review = {
    user: { name: string, role: string, image_url?: string },
    review: string,
    stars: number
}

export type Pricing = {
    name: string,
    appliers: string,
    price: number,      // in American Dollar
    storage: number,     // in GB
    chatHistory: number,
    optimization: boolean,
    unlimitedViewers: false,
    liveReporting: number,
    supportDays: number
}