import React from 'react';
import '../FindFree.css';



const IFindSearch = () => {
    return ( 
        <div>
            <form action="get" className="fdmnsearch">
                <input type="text" className="fdmnwant" placeholder="try...'Dext Solutions Consult'" required />
                <input type="text" className="fdmnlocate" placeholder="location" />
                <input type="submit" className="fdmnsubmit" value="Search" />
            </form>
        </div>
    );
}

export default IFindSearch;