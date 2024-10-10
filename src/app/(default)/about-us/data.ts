import {User} from "@/types";

export const firstCarouselImages: string[] = [
    '/assets/images/about/abtslide_2.png',
    '/assets/images/about/abtslide_1.png',
    '/assets/images/about/abtslide_2.png',
    '/assets/images/about/abtslide_3.png',
    '/assets/images/about/abtslide_4.png',
    '/assets/images/about/abtslide_5.png',
    '/assets/images/about/abtslide_4.png',
]

export const statsValues = [
    {number: 2300, start: 1500, time:10, step: 3, name: 'Reviews', letter: '+'},
    {number: 150, step: 3, name: 'Countries', letter: '+'},
    {number: 17, name: 'Download', letter: 'M+'},
    {number: 8, name: 'Followers', letter: 'M+'}
]

export const valuesItem = [
    {name: 'Skilled Team', content: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry\'s standard dummy text ever since.'},
    {name: 'Creative Thinking', content: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry\'s standard dummy text ever since.'},
    {name: 'Growth Support', content: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry\'s standard dummy text ever since.'},
    {name: 'Creative Thinking', content: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry\'s standard dummy text ever since.'},
    {name: 'Skilled Team', content: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem Ipsum has been the industry\'s standard dummy text ever since.'},
]

export const teams: User[] = [
    {name: 'William Scott', role: 'CEO & Managing Director', image_url: '/assets/images/teams/user-1.png'},
    {name: 'Averill Rack', role: 'Team Lead', image_url: '/assets/images/teams/user-2.png'},
    {name: 'Geo Back', role: 'Product Manager', image_url: '/assets/images/teams/user-3.png'}
]

export const userRates = [
    {
        rate: 4,
        user: {name: 'William Joy', role: 'Smartbrian Tech', image_url: '/assets/images/reviews/review-1.png'} as User,
        comment: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem typing industry has been the standard dummy.'
    },
    {
        rate: 5,
        user: {name: 'William Joy', role: 'Smartbrian Tech', image_url: '/assets/images/reviews/review-2.png'} as User,
        comment: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem typing industry has been the standard dummy.'
    },
    {
        rate: 4,
        user: {name: 'William Joy', role: 'Smartbrian Tech', image_url: '/assets/images/reviews/review-3.png'} as User,
        comment: 'Lorem Ipsum is simply dummy text of the printing and typing industry lorem typing industry has been the standard dummy.'
    },
]

export const sponsors = [
    '/assets/images/sponsors/spotify.png',
    '/assets/images/sponsors/slack.png',
    '/assets/images/sponsors/woocommerce.png',
    '/assets/images/sponsors/themeforest.png',
    '/assets/images/sponsors/envato.png',
    '/assets/images/sponsors/jquery.png',
    '/assets/images/sponsors/shopbot.png',
    '/assets/images/sponsors/paypal.png',
]