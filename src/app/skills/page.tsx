import { useMemo } from "react"

type SkillType =
    | 'lang'
    | 'devops'
    | 'tool'
    | 'ui'

interface Skill {
    company: string
    type: SkillType
    name: string
    desc: string
}
const skillTypeNames: Record<SkillType, string> = {
    lang: "Programming Languages",
    devops: "Dev-Ops CI/CD Tools",
    tool: "Tools",
    ui: "UI Frameworks",
}
const skillTypes: SkillType[] = Object.keys(skillTypeNames) as SkillType[];

const mySkills: Skill[] = [
    {
        company: "Yellowgrid",
        type: "lang",
        name: "JavaScript",
        desc: "Learnt this in free time as a teen, but I improved here while working on projects involving NodeJS and web frameworks"
    },
    {
        company: "Yellowgrid",
        type: "lang",
        name: "TypeScript",
        desc: "Learnt for a better sense of safety about Javascript code I developed,.\n"+
        "Also its very powerful typesystem helped protect against potential bugs and is often self-documenting.\nI've used this  heavily in a handful of linked-together (private) NPM React/generic libraries.",
    },
    {
        company: "Both",
        type: "lang",
        name: "C#",
        desc: "Learnt in free-time, and covered in Level 3 Software-Development Apprenticeship. See ASP .NET Core for previous project discussion."
    },
    {
        company: "Yellowgrid",
        type: "devops",
        name: "Docker",
        desc: "Learnt in DevOps apprenticeship, I've compiled Docker versions of web apps and deployed them using a tool CapRover for deployment."
    },
    {
        company: "Yellowgrid",
        type: "tool",
        name: "NodeJS",
        desc: "I learnt this so I could use full-stack frameworks, and frontend tools that involve a build system.",
    },
    {
        company: "Yellowgrid",
        type: "ui",
        name: "React",
        desc: "I adapted my Typescript knowledge for the difference and learnt the different hooks.\n"+
        "Used in a an alpha NextJS app, a NextJS app, and an internal component/utility NPM library.",
    }

]

interface MappedSkills {
    type: SkillType
    skills: Skill[]
}
export default function SkillsPager() {
    const mapped = useMemo<MappedSkills[]>(() => (skillTypes)
        .map(v => ({ type: v, skills: mySkills.filter(s => s.type === v) })), [mySkills, skillTypes])
    return <dl>
        {mapped.map(s => <div key={s.type}>
            <dt className="font-bold text-xl">
                {skillTypeNames[s.type]}
            </dt>
            <dd>
                {s.skills.map(s => (
                    <div key={s.name}>
                        <span className="font-bold">
                            {s.name}
                        </span>
                        <br />
                        <span className="whitespace-break-spaces">
                            {s.desc}
                        </span>
                    </div>
                ))}
            </dd>
        </div>)}

    </dl>
}