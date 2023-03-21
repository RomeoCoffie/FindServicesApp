import React from 'react';


const Search = () => {
    return (
        <div>
            <form className="searchbox">
                <input type="text" placeholder="try Carpenter..." required className="type" />
                <select className="type" required>
                    <option>From freelance page</option>
                    <option>From registered companies page</option>
                </select>
                <input type="submit" value="Search" className="search" />
            </form>                    
        </div>
    );
}

export default Search;