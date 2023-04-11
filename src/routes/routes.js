import Home from "../pages/Home/home";
import Blog from "../pages/Blog/blog";
import News from "../pages/News/news";
import Contact from "../pages/Contact/contact";
import Serviecs from "../pages/Serviecs/serviecs";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/serviecs',
        component: Serviecs
    },
]
export default publicRoutes;