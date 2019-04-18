const productsDetailsWithLimit = require('../scripts/loadProductDetails');

async function getProducts(req, res) {
    let { pageNo } = req.query;
    let result = {};
    
    let response = await productsDetailsWithLimit.productDetailsWithPagination(pageNo);

    result.status = 200;
    result.message = "Success";
    result.result = response;
    console.log("result is asiiiiiiiii ", result);
    return res.status(200).send(result);
}

module.exports = {
    getProducts,
}