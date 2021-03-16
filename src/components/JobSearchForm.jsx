import React, { Component } from 'react';
import SearchCardList from './SearchCardList';


class JobSearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: "",
            languageArray: []
        }
    }


    _onChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }


    _handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://jobs.github.com/positions.json?description/${this.state.searchQuery}`;
        const newSearchData = await fetch(url)
            .then(response => response.json());
        this.setState({
            languageArray: [...this.state.languageArray, newSearchData],
        });

    }

    render() {
        const { languageArray } = this.state;
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <label>
                        <input 
                        name="searchQuery"
                        placeholder="Enter a language"
                        value={this.state.searchQuery}
                        type="text"
                        onChange={(e) => {
                            this._onChange(e.target.name, e.target.value)
                        }}
                        />
                    </label>
                        <button type="submit">Search</button>
                </form>
                {languageArray.length ? <SearchCardList languageArray={languageArray} /> : " "}
            </div>
        )
    }
}

export default JobSearchForm;