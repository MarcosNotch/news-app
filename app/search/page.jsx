import useFetchNews from '../../utils/hooks/useFetchNews';
import NewsList from '../components/newsList/NewsList';


export default async function SearchPage({searchParams}){

    const {newsSorted} = await useFetchNews("general", searchParams?.term, true)

    return(
        <div>
            <NewsList news={newsSorted} />
        </div>
    )
}