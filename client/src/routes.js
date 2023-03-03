import {
    ADMIN_ROUTE, ARTICLE_ROUTE, CONTACTS_ROUTE,
    DEVICE_ROUTE, EQUIPMENT_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, NEWS_ROUTE,
    REGISTRATION_ROUTE, REVIEWS_ROUTE, SERVICES_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Main from "./pages/Main"
import Admin from "./pages/Admin";
import News from "./pages/News";
import Services from "./pages/Services";
import ArticlePage from "./pages/ArticlePage";
import Equipment from "./pages/Equipment";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: ArticlePage
    },
    {
        path: EQUIPMENT_ROUTE,
        Component: Equipment
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    }
]