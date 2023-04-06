import { Dispatch, SetStateAction } from "react"


export type Props = {
    children: JSX.Element | JSX.Element[]
}

export type typeContext = {
    navButtonName: string,
    setNavButtonName: Dispatch<SetStateAction<string>> 
}
