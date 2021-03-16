import SearchCard from './SearchCard'

const SearchCardList = (props) => {
    const { languageArray } = props;
    return (
        <ul>
            {languageArray.map((language, index) => {
                return <SearchCard language={language} key={index}/>;
            })}
        </ul>
    )
}

export default SearchCardList;