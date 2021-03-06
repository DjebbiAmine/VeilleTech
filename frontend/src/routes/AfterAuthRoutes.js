import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const Service = lazy(() => import('../pages/Service.page'));
const SingleService = lazy(() => import('../pages/SingleService.page'));
const Portfolio = lazy(() => import('../pages/Portfolio.page'));
const SinglePortfolio = lazy(() => import('../pages/SinglePortfolio.page'));
const NewsFields = lazy(() => import('../pages/NewsFields.page'));
const NewsArticles = lazy(() => import('../pages/NewsArticles.page'));
const About = lazy(() => import('../pages/About.page'));
const Contact = lazy(() => import('../pages/Contact.page'));
const Current = lazy(() => import('../pages/Current.page'));
const Humains = lazy(() => import('../pages/Humains.page'));
const Materials = lazy(() => import('../pages/Materials.page'));
const NotFound = lazy(() => import('../pages/Page404.page'));

const AfterAuthroutes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Service',
        path: '/service',
        exact: true,
        component: Service,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Service Details',
        path: '/single-service',
        exact: true,
        component: SingleService,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Portfolio Page',
        path: '/portfolio',
        exact: true,
        component: Portfolio,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Single Portfolio',
        path: '/single-portfolio',
        exact: true,
        component: SinglePortfolio,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'News fields',
        path: '/news/news-fields',
        exact: true,
        component: NewsFields,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'News Articles',
        path: '/news/news-articles/:postId',
        exact: true,
        component: NewsArticles,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'News Articles',
        path: '/news/news-articles/',
        exact: true,
        component: NewsArticles,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Humains',
        path: '/assets/users',
        exact: true,
        component: Humains,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Materials',
        path: '/assets/materials',
        exact: true,
        component: Materials,
        authentication: false,
        theme: "theme-1"
    }
    ,
    {
        name: 'About',
        path: '/about',
        exact: true,
        component: About,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Contact',
        path: '/contact',
        exact: true,
        component: Contact,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Home',
        path: '/user/current',
        exact: true,
        component: Current,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'NotFound',
        path: '/*',
        exact: false,
        component: NotFound,
        authentication: false,
    }
];

export default AfterAuthroutes;