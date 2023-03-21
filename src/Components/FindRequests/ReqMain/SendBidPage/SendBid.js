import React, { Component } from 'react';
import './Categories.css';
import CatSub from './CategoriesBody/CatSub';

class CategoriesPage extends Component {
    render() {
        return (
            <div>
                <CatSub />
            </div>
        );
    }
}

export default CategoriesPage;