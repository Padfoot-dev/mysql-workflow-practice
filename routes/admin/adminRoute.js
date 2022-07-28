const router = require("express").Router();


router.get("/",(req,res,next)=> {

    res.render("admin/products")
})


router.get("/edit",(req,res,next)=> {

    res.render("admin/edit-product")
})


router.get("/details",(req,res,next)=> {

    res.render("admin/product-details")
})

router.get("/add-product",(req,res,next)=> {

    res.render("admin/add-product")
})


module.exports=router;