"use client"
import { useMemo } from "react";
import { GenericType, GenericTypeMap } from "../generic";
import { Icon } from "@iconify/react";

export interface GenericDisplayProps<T extends GenericType = GenericType> {
    type?: T
    value: GenericTypeMap[T]
}

export default function GenericDisplay<T extends GenericType = GenericType>(props: GenericDisplayProps<T>) {
    const ty = useMemo(() => props.type ?? "string", [props.type])

    switch (ty) {
        case "icon":
            return <Icon icon={props.value as string} />
        case "statusIcon":
            return <Icon 
            className={props.value ? "text-green-600" :  "text-red-600"}
            icon={props.value ? "mdi:checkbox-marked" : "mdi:checkbox-blank"} />

        case "date":
            return <>{(props.value as Date)?.toLocaleDateString()}</>
        default:

            return <>
                {props.value?.toString() ?? ""}
            </>
    }
}