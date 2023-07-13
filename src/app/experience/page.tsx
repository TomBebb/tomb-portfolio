import AutoTable, { AutoTableColumn } from "../components/AutoTable"

interface JobDetails {
    name: string
    job: string
    role: string
    start: Date
    end?: Date
}

type FullJobDetail = JobDetails & {
    active: boolean
}

const jobDetailCols: AutoTableColumn<FullJobDetail>[] = [
    {
        key: "name",
        name: "Company"
    },
    {
        key: "job",
        name: "Job"
    },
    {
        key: "role",
        name: "Role"
    },
    {
        key: "start",
        name: "Start",
        type: "date"
    },
    {
        key: "end",
        name: "End",
        type: "date"
    },
    {
        key: "active",
        name: "Active",
        type: "statusIcon",
        align: "right"
    }
]

const jobDetails: JobDetails[] = [
    {
        name: "Astra Telematics",
        job: "Apprentice Software Developer",
        role: "Software Developer",
        start: new Date(2019, 6, 6),
        end: new Date(2020, 6, 1)
    },
    {
        name: "Yellowgrid Limited",
        job: "DevOps Engineer",
        role: "Full-Stack Developer",
        start: new Date(2021, 0, 1),
    },
]

const mappedJobs: FullJobDetail[] = jobDetails.map(j => ({...j, active: j.end == null}))

export default function Exp() {
    return (
        <main >
            <AutoTable
                columns={jobDetailCols}
                rows={mappedJobs}
            />
        </main>
    )
}
