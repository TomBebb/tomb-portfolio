import { useMemo } from "react"
import { NavItem, navItems } from "../nav"
import { Icon } from "@iconify/react"

export interface NavbarProps {
  curr?: NavItem
  navTitle: string
}

export interface NavbarItemProps {
  item: NavItem,
  currPath: string
}
function NavbarItem({ item: ni, currPath }: NavbarItemProps) {
  const isActive = useMemo(() => currPath === ni.pathname, [currPath, ni])
  return <li className={isActive ? "disabled" : ""}>
    {ni.children?.length ?

      <details>
        <summary>
          {ni.name}
          {ni.icon}
        </summary>
        <ul className="p-2 bg-base-100">
          {ni.children.map(v => <NavbarItem
            key={v.pathname}
            currPath={currPath}
            item={v}
          />)}
        </ul>
      </details>
      :
      <a href={ni.pathname}>
        {ni.name}
        {ni.icon}
      </a>}
  </li>
}
export default function Navbar({ navTitle, ...props }: NavbarProps) {

  return <div className="navbar bg-base-100">
    <div className="flex-1  text-xl">
      <a className="btn btn-ghost " href="/">
        Portfolio
      </a>
      - {navTitle}
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {navItems.map(ni => <NavbarItem
          key={ni.pathname}
          item={ni}
          currPath={props.curr?.pathname ?? ""}
        />)}

        <a
          href="https://github.com/TomBebb/tomb-portfolio"
          className="btn btn-primary"
        >
          <Icon icon="mdi:github" />
          View Source
        </a>
      </ul>
    </div>
  </div>
}