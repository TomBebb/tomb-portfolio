export type GenericTypeMap = {
    string: string
    number: number
    date: Date
    time: Date
    icon: string
    statusIcon: boolean
}

export type GenericType = keyof GenericTypeMap

export type Align = "center" | "left" | "right"
export const typeAlignOverrides: Partial<Record<GenericType, Align>> = {
    number: "right"
}
