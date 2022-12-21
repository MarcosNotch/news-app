import { categories } from "../../../constants"
import NavLink from "../NavLink/NavLink"


export default function NavLinks () {
    return (
        <nav className="grid grid-cols-4 items-center md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 border-b">
            {categories.map((category) => (
                <NavLink key={category} category={category} isActive={true}/>
            ))}
        </nav>
     
    )
}