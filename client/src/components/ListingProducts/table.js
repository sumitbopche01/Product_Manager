import React , {Component} from 'react';

import classes from './ListingProducts.module.css';

class TableList extends Component {
    render(){
        return(
            <div>
                <div className ={classes.table}> 
                        <h3 >Products List</h3>      
                        <table>
                            <tbody>
                                <tr>
                                    <th>ProductId</th>
                                    <th>Title</th>
                                    <th>Subcategory</th>
                                    <th>Price</th>
                                    <th>Popularity</th>
                                </tr>
                                    {this.props.list}     
                            </tbody>
                        </table>
                </div>
            </div>
            );
    }
}

export default TableList;
