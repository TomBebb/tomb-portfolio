import AutoTable, { AutoTableColumn } from "../components/AutoTable"

interface JobDetails{
    name: string
    job: string
    role: string
}

const jobDetailCols: AutoTableColumn<JobDetails>[] = [
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
    }
]

const JobDetails: JobDetails[] =[
    {
        name: "Astra Telematics",
        job: "Apprentice Software Developer",
        role: "Software Developer"
    }
]
export default function Exp() {
    return (
        <main >
            <AutoTable
                columns={jobDetailCols}
                rows={JobDetails}
                />
        </main>
    )
}
