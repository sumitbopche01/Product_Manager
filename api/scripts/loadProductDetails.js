const request = require('request-promise');
const config = require('../config/dev_sysconf.json');

let products, productKeys;
let LIMIT = config.LIMIT;

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

    let startIndex = pageNo * LIMIT ;
    if (productKeys.length - 1 - startIndex > LIMIT) {
        LIMIT = startIndex + LIMIT;
    } else {
        console.log("else is as ---- ", LIMIT);
        LIMIT = productKeys.length;
    }
    console.log("startindec is as ", startIndex, " limit set is as -- ", LIMIT);
    for (let i = startIndex; i < LIMIT; i++) {
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