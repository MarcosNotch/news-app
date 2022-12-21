import { categories } from "../constants"
import useFetchNews from "../utils/hooks/useFetchNews"
import NewsList from "./components/NewsList/NewsList"

 async function HomePage () {

    const {newsSorted} = await useFetchNews("general", "", false)

    return (
        <div>
            <NewsList news={newsSorted} />
        </div>
    )
}

export default HomePage