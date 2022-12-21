import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";


export default function Article({article}){
    return(
        <article className="articleContainer">
            {article.image && 
            <img src={article.image} alt={article.title} className="h-56 w-full object-cover rounded-t-lg shadow-md" />}
            <div className="flex-1 flex flex-col">
                <div  className="flex-1 flex flex-col p-5">
                    <h2 className="font-bold font-serif">{article.title}</h2>

                    <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-6">{article.description}</p>
                    </section>

                    <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                        <p>{article.source} - </p>
                        <p>{article.published_at}</p>
                    </footer>
                </div>
                <ReadMoreButton article={article}/>
            </div>
        </article>
    )   
}