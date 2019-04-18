const request = require('request-promise');
const config = require('../config/dev_sysconf.json');

let products, productKeys;
let PAGESIZE = config.PAGESIZE;

async function loadProductsDetails() {
    let options = {
        method: "GET",
        uri: 'https://s3.ap-south-1.amazonaws.com/ss-local-files/products.json',
        json: true
    }

    let details = await request(options);

    products = details.products;
    productKeys = Object.keys(products);

    productKeys.sort((a, b) => {
        return parseInt(products[b].popularity) - parseInt(products[a].popularity);
    })
    console.log("products data is loaded", productKeys);
}

/**
 * 
 * @param {Integer} pageNo 
 */
async function productDetailsWithPagination(pageNo) {
    console.log("pageNo isa s -- ", pageNo);
    let productList = [];

    let startIndex = (pageNo - 1) * PAGESIZE ;
    let limit;
    if (productKeys.length - 1 - startIndex > PAGESIZE) {
        limit = startIndex + PAGESIZE;
    } else {
        console.log("else is as ---- ", limit);
        limit = productKeys.length;
    }
    console.log("startindec is as ", startIndex, " limit set is as -- ", limit);
    for (let i = startIndex; i < limit; i++) {
        let key = productKeys[i];
        products[key].productId = key;
        productList.push(products[key]);
    }
    
    return productList;
}

module.exports = {
    loadProductsDetails,
    productDetailsWithPagination
};