import { useMemo } from "react"

type SkillType =
    | 'lang'
    | 'devops'
    | 'tool'

interface Skill {
    type: SkillType
    name: string
    desc: string
}
const skillTypeNames: Record<SkillType, string> = {
    lang: "Programming Languages",
    devops: "Dev-Ops CI/CD Tools",
    tool: "Tools"
}
const skillTypes: SkillType[] = Object.keys(skillTypeNames) as SkillType[];

const mySkills:  Skill[] = [
    {
        type: "lang",
        name: "TypeScript",
        desc: ""
    },
]

interface MappedSkills {
    type: SkillType
    skills: Skill[]
}
export default function SkillsPager() {
    const mapped = useMemo<MappedSkills[]>(() => (skillTypes)
        .map(v => ({ type: v, skills: mySkills.filter(s => s.type === v) })), [mySkills, skillTypes])
    return <div>
        {mapped.map(s => <div key={s.type}>
            <div className="font-bold text-xl">
                {skillTypeNames[s.type]}
            </div>
            <div>
                {s.skills.map(s => (
                    <div key={s.name}>
                        <span className="font-bold">{s.name}</span> - {s.desc}
                    </div>
                ))}
            </div>
        </div>)}

    </div>
}