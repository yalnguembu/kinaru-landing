
export type User = {
    name: string,
    role: string,
    image_url?: string
}

export type Review = {
    user: User,
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

export type Post = {
    title: string,
    image_url: string,
    content?: string,
    tag: string,
    meta: {
        created_at: string,
        comments: number,
        views: number,
        author: User
    }
}

export type Faq = {
    question: string,
    answer: string
}