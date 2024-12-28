import {Review} from "@/types";

export async function fetchReviews()
{
    return Promise.resolve([
        {
            user: {name: "Willium Joy", role: "Smartbrain Tech", image_url: '/assets/images/reviews/review-1.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "John Doe", role: "Corporate Agency", image_url: '/assets/images/reviews/review-2.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "Maria", role: "Company Inc", image_url: '/assets/images/reviews/review-3.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "Willium Joy", role: "Smartbrain Tech", image_url: '/assets/images/reviews/review-1.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "John Doe", role: "Corporate Agency", image_url: '/assets/images/reviews/review-2.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "Maria", role: "Company Inc", image_url: '/assets/images/reviews/review-3.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "Willium Joy", role: "Smartbrain Tech", image_url: '/assets/images/reviews/review-1.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
        {
            user: {name: "John Doe", role: "Corporate Agency", image_url: '/assets/images/reviews/review-2.png'},
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
            stars: 5
        },
    ] as Review[])
}