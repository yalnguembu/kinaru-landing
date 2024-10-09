
export type Review = {
    user: { name: string, role: string, image_url?: string },
    review: string,
    stars: number
}