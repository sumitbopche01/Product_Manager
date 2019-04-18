import React, { Component } from 'react';
import axios from 'axios';

import TableList from './table'
import  classes from './ListingProducts.module.css';
import Pagination from '../Pagination/Pagination';

class ListUrls extends Component {

    constructor(props){
        super(props)
        this.state = {
            productsList:[]
        }

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.getData = this.getData.bind(this);
    }

    getData = (pageNo) =>{
        let URL = `http://localhost:3001/api/v1/getproducts?pageNo=${pageNo}`;

        console.log("URL is as --- ", URL);

        axios.get(URL).then((response) => {
            console.log("response is as --- ", response);
            this.setState({
                productsList:response.data.result
            })
        })
        .catch((error) => {
            console.log("Error while getting the result--- ", error);
        })
    }

    componentDidMount(pageNo = null) {
        if(!pageNo){
            pageNo = 1;
        }
        this.getData(pageNo);
    }

    render(){
        let list = this.state.productsList.map((data) =>{
            return (
                <tr key={data.productId}>
                    <td>{data.productId}</td>
                    <td>{data.title}</td>
                    <td>{data.subcategory}</td>
                    <td>{data.price}</td>
                    <td>{data.popularity}</td>
                </tr>
            )
        })
        // console.log("list is as --- ")
        return(
            <div>
                
                <div className={classes.productsTable}>
                    <TableList list={list} getData={this.getData}> </TableList>
                </div>
            </div>
            
        )
    }
}

export default ListUrls;
