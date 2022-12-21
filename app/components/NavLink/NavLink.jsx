'use client'

import Link from "next/link";
import {usePathname} from "next/navigation"
import { useEffect, useState } from "react";


export default function NavLink ({ category }) {

    const pathname = usePathname()
    const [active, setActive] = useState(false)

    const isActive = (path) => {
        setActive(pathname?.split('/').pop() === path)  
    }

    useEffect(() => {
        isActive(category)
    }, [pathname])

    return (
        <Link href={`/news/${category}`} prefetch={false} className={`navLink ${active && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg   '}`}>
         
                {category}
          
        </Link>
    )
}