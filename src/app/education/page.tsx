import AutoTable, { AutoTableColumn } from "../components/AutoTable"

interface Qualification {
    name: string
    level: number
    grade: string
    date: Date
}

const qualificationCols: AutoTableColumn<Qualification>[] = [
    
    {
        key: "level",
        name: "Level",
    },
    {
        key: "name",
        name: "Name",
    },
    {
        key: "grade",
        name: "Grade",
    },
    {
        key: "date",
        name: "Date",
        type: "date",
        align: "right",
    },
]

const qualifications: Qualification[] = [
    {
        name: "DevOps ",
        level: 4,
        grade: "A",
        date: new Date(2017, 6, 10)
    },
    {
        name: "A Level Computer Science",
        level: 3,
        grade: "A",
        date: new Date(2017, 6, 10)
    },
    
    {
        name: "A Level Mathematics",
        level: 3,
        grade: "A*",
        date: new Date(2017, 6, 10)
    },  
    {
        name: "A Level Further Mathematics",
        level: 3,
        grade: "C",
        date: new Date(2017, 6, 10)
    }
]

export default function Exp() {
    return (
        <main >
            <AutoTable
                columns={qualificationCols}
                rows={qualifications}
            />
        </main>
    )
}
