import React from 'react';
//intial content
// const SearchBar  = ()=>{
//     return <input />
// };

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

    }
    render() {
        return (
            <div className="search-bar" >


                <input className="search-barinput "  value={this.state.term}
                    onChange={
                        (event) => this.onInputChange(event.target.value)}
                />
                {/* <p>{this.state.term}</p> */}


            </div>

        )

    }

    onInputChange(term) {
        //  console.log(term);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}
export default SearchBar;