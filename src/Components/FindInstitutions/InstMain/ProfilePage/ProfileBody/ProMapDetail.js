/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import '../profile.css';


class ProMapDetail extends Component {
    render() {
        return (
            <div className='promapdetail'>
                <div>
                    <label>Items and Services you can expect from me:</label>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minus eaque, dignissimos inventore similique nemo officiis iste, quo reprehenderit natus aut maiores modi in, rerum sapiente omnis sunt incidunt ullam.</span>
                </div>
                <div>
                    <label>Items and Services I expect from you:</label>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa quam accusantium tenetur? Neque voluptatem sapiente est veritatis libero autem eaque, quibusdam architecto ipsa. Maxime tenetur hic molestias necessitatibus voluptas?</span>
                </div>
                <div className='pricetb'>
                    <table>
                        <tr>
                            <th>Delivery Time</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Within a day</td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>Within a day</td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>Within a day</td>
                            <td>$40.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProMapDetail;