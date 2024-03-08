const verifyCarsInput = (req,res, next) =>{
    const  carCategory = req.query.q;
    console.log("carCategory is: ", carCategory)
    next();
}

module.exports = {
    verifyCarsInput
}