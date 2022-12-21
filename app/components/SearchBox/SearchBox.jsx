'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBox () {

    const [input, setInput] = useState('')
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()

        router.push(`/search?term=${input}`)
    }

    return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5" onSubmit={handleSearch}>
        <input type="text" placeholder="Search KeyWords" onChange={(e) => {setInput(e.target.value)}} className="w-full h-14 rounded-sm placeholder-gray text-gray-500 outline-none flex-1 bg-transparent 
        dark:text-orange-500"/>

        <button type="submit" disabled={!input} className="text-orange-400 disabled:text-gray-400">
            Search
        </button>

    </form>
    )
}