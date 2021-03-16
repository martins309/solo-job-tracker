import { BrowserRouter as Link, useRouteMatch } from "react-router-dom";

const SearchCard = (props) => {
    const { language } = props;
    console.log(language);

    const { url } = useRouteMatch

    return (
        <li>
            <Link to={`${url}`}>

            </Link>
        </li>
    )
}

export default SearchCard;