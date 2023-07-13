import { useMemo } from "react"

type SkillType =
    | 'lang'
    | 'devops'
    | 'data'
    | 'tool'
    | 'fw'
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
    fw: "Frameworks",
    data: "Database",
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
    },

    {
        company: "Yellowgrid",
        type: "fw",
        name: "NextJS",
        desc: "Used for a couple of applications, including heavy-duty APIs.",
    },
    {
        company: "Yellowgrid",
        type: "fw",
        name: "ASP .NET Core",
        desc: "Used for a low-latency realtime telephony stats API consumed by a React frontend." + 
        " I made sure to cache as much as possible to avoid improve speed. \n"+
        "Used SQLite since this was an embedded application, which used an ORM library Linq2Db.\n" +
        "I also setup REST endpoints using its MVC architecture.",
    },

    {
        company: "Yellowgrid",
        type: "data",
        name: "MariaDB / MySQL",
        desc: "Used to store users, etc for an internal NextJS API that used ",
    },
    {
        company: "Yellowgrid",
        type: "data",
        name: "SQLite",
        desc: "Used to store telephony data used for stats in main C# / ASP .NET Core project",
    },

]

interface MappedSkills {
    type: SkillType
    skills: Skill[]
}
export default function SkillsPager() {
    const mapped = useMemo<MappedSkills[]>(() => (skillTypes)
        .map(v => ({ type: v, skills: mySkills.filter(s => s.type === v) })), [mySkills, skillTypes])
    return <dl>
        {mapped.map(s => <div key={s.type} className="p-4">
            <dt className="font-bold text-xl">
                {skillTypeNames[s.type]}
            </dt>
            <dd>
                {s.skills.map(s => (
                    <div key={s.name} className="m-3">
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