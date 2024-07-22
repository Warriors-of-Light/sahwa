import { ReactNode } from "react"

export default function SharedLayout({children}: {
    children: ReactNode
}){
    return <>
        <header/>
            <main>
                {children}
            </main>
        <footer/>
    </>
}