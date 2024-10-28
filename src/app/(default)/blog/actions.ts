import {Post} from "@/types";

export const tags = ['Mobile', 'Experience Utilisateur']

export async function fetchPosts()
{
    return Promise.resolve([
        {
            title: 'Effective ways to monetize mobile apps for better performance',
            image_url: '/assets/images/posts/post-1.png',
            tag: tags[0],
            meta: {
                comments: 5,
                views: 750,
                author: {
                    name: 'Willium Joy',
                    role: 'Copy editor',
                    image_url: '/assets/images/reviews/review-1.png'
                },
                created_at: '05-12-2023'
            }
        },
        {
            title: 'Why you our app, top 5 reason to choose our app ?',
            image_url: '/assets/images/posts/post-2.png',
            tag: tags[1],
            meta: {
                comments: 5,
                views: 421,
                author: {
                    name: 'Philip Jose',
                    role: 'Tech manager',
                    image_url: '/assets/images/reviews/review-2.png'
                },
                created_at: '05-12-2023'
            }
        },
        {
            title: 'Effective ways to monetize mobile apps for better performance',
            image_url: '/assets/images/posts/post-3.png',
            tag: tags[0],
            meta: {
                comments: 5,
                views: 750,
                author: {
                    name: 'Willium Joy',
                    role: 'Copy editor',
                    image_url: '/assets/images/reviews/review-1.png'
                },
                created_at: '05-12-2023'
            }
        },
        {
            title: 'Why you our app, top 5 reason to choose our app ?',
            image_url: '/assets/images/posts/post-4.png',
            tag: tags[1],
            meta: {
                comments: 5,
                views: 421,
                author: {
                    name: 'Philip Jose',
                    role: 'Tech manager',
                    image_url: '/assets/images/reviews/review-3.png'
                },
                created_at: '05-12-2023'
            }
        },
    ] as Post[])
}

