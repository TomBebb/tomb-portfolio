import { Icon } from "@iconify/react"

export interface NavItem {
    name: string
    desc?: string
    pathname: string
    icon?: JSX.Element
    children?: NavItem[]
}

export const navItems: NavItem[] = [
    {
        name: "Home",
        pathname: "/",
        icon: <Icon icon="mdi:home"/>,
    },
    {
        name: "Education",
        pathname: "/education",
        desc: "View my qualifications",
        icon: <Icon icon="mdi:school"/>,
    },
    {
        name: "Experience",
        pathname: "/experience",
        desc: "View my jobs",
        icon: <Icon icon="mdi:briefcase"/>,
    },
    {
        name: "Skills",
        pathname: "/skills",
        desc: "View my skills",
        icon: <Icon icon="mdi:brain"/>,
    }
]