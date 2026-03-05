import { IconType } from "react-icons";
import {
    LuCreditCard,
    LuLayoutDashboard,
    LuListTodo,
    LuUser,
} from "react-icons/lu";

export type NavItem = {
    href: string;
    label: string;
    icon: IconType;
};

export const nav: NavItem[] = [
    {
        href: "/overview",
        label: "Overview",
        icon: LuLayoutDashboard,
    },
    {
        href: "/user",
        label: "User",
        icon: LuUser,
    },
    {
        href: "/subscription",
        label: "Subscription",
        icon: LuCreditCard,
    },
    {
        href: "/todos",
        label: "Todos",
        icon: LuListTodo,
    },
];