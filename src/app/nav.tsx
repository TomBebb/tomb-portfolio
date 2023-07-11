import { Icon } from "@iconify/react"

export interface NavItem {
    name: string
    pathname: string
    icon?: JSX.Element
    children?: NavItem[]
}

export const navItems: NavItem[] = [
    {
        name: "Home",
        pathname: "/",
        icon: <Icon icon="mdi:home"/>
    },
    {
        name: "Projects",
        pathname: "/projects"
    },
    {
        name: "Skills",
        pathname: "/skills",
        children: [
            {
                name: "C#",
                pathname: "/skills/c_sharp"
            }
        ]
    }
]