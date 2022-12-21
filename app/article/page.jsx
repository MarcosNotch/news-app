import { notFound } from "next/navigation"

export default function Article({searchParams}){

    if((searchParams && Object.entries(searchParams).length === 0) || !searchParams){
        return notFound()
    }

    const article = searchParams

    return(
        <article>
            <section>
                {article.image && (
                    <img className="h-30 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                    src={article.image}/>
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">
                        {article.title}
                    </h1>
                    <div className="flex">
                        <h2 className="font-bold">By {article.author}</h2>
                        <h2 className="font-bold pl-4">Source {article.source}</h2>
                    </div>
                </div>
            </section>
        </article>
    )

}