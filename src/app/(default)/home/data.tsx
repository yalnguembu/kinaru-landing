import {FaCalendar, FaClock, FaDownload} from "react-icons/fa6";
import {FaHistory} from "react-icons/fa";

export const avatars = [
    '/assets/images/avatars/avatar-1.png',
    '/assets/images/avatars/avatar-2.png',
    '/assets/images/avatars/avatar-3.png'
]

export const services = [
    {
        tag: 'Task Manage',
        title: 'Task creation & manage lorem ipsum',
        image: "/assets/images/services/service-1.png",
        icon: <FaCalendar />,
        description: "Lorem Ipsum is simply dummy text of the printing and " +
            "typing industry lorem Ipsum has been the industry's standard " +
            "dummy text ever since.",
        actionText: "Start Free Trial",
        actionUrl: "#",
        data: [
            'Automate all tasks',
            'Get notified Lorem'
        ],
        className: "flex-col-reverse md:flex-row-reverse"
    },
    {
        tag: 'Schedule Meeting',
        title: 'Manage project and track lorem',
        image: "/assets/images/services/service-2.png",
        icon: <FaClock />,
        description: "Lorem Ipsum is simply dummy text of the printing and " +
            "typing industry lorem Ipsum has been the industry's standard " +
            "dummy text ever since.",
        actionText: "Start Free Trial",
        actionUrl: "#",
        data: [
            'Lorem Ipsum is simply dummy text',
            'The printing and typesetting industry lorem',
            'Has been the industry\'s dummy'
        ],
        className: "flex-col-reverse"
    },
    {
        tag: 'History',
        title: 'Task creation & manage lorem ipsum dollar',
        image: "/assets/images/services/service-3.png",
        icon: <FaHistory />,
        description: "Lorem Ipsum is simply dummy text of the printing and " +
            "typing industry lorem Ipsum has been the industry's standard " +
            "dummy text ever since.",
        actionText: "Start Free Trial",
        actionUrl: "#",
        data: [
            'Lorem Ipsum is simply dummy text',
            'The printing and type setting industry lorem',
            'Has been the industry\'s dummy'
        ],
        className: "flex-col-reverse md:flex-row-reverse"
    },
]

export const steps = [
    {
        icon: <FaDownload size={32} />,
        title: 'Download app',
        description: 'Download App. It will work for Android, Mac & Windows'
    },
    {
        icon: <FaDownload size={32} />,
        title: 'Create account',
        description: 'Our app is free for 14 days, Sign up free for trial period'
    },
    {
        icon: <FaDownload size={32} />,
        title: 'Enjoy the app',
        description: 'Enjoy our app & share most amazing app experience'
    },
]