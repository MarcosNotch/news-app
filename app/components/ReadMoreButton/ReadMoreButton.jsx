'use client'

import { useRouter } from "next/navigation"

export default function ReadMoreButton({article}) {

    const router = useRouter()

    const handleClick = () => {
        const queryString =  Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&')
        const url = '/article?' + queryString
        router.push(url)
    }        
    return (
        <button onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500">
            Read More
        </button>
    )
}