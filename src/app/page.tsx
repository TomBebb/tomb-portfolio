"use client"
import { useMemo } from "react";
import Hero from "./components/Hero";
import { navItems } from "./nav";
import Link from "next/link";

export type DaisyUiColor = 
| "primary"
| "secondary"
| "neutral"
| "warning"
| "error"
| "success"

const allColors: DaisyUiColor[] = [
  "success",
  "primary",
   "secondary",
  "neutral",
  "warning",
  "error",
]
export default function Home() {
  const myNavItems = useMemo(() => navItems
    .filter(i => i.pathname !== "/"),
    [navItems])
  return (<>

    <Hero
      title="Welcome"
    >

      <p className="mb-5">
        I am a full-stack developer currently looking for new opportunities at another workplace.
      </p>
      <Link href="mailto:tophattedcoder@gmail.com" className="btn btn-primary">
        Contact Me
      </Link>
    </Hero>
    <div className="grid md:grid-cols-12 grid-cols-4">
      {myNavItems
        .map((ni, i) => <Link
          href={ni.pathname}
          key={ni.pathname}
          className="col-span-4"
        >

          <Hero title={ni.name} className={"bg-"+allColors[i]}>
            {ni.desc ?? ""}
          </Hero>
        </Link>)}
    </div>
  </>)
}
