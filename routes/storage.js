const express = require('express')
const User = require('../models/User')
const Product = require('../models/Product')
const Size = require('../models/Size')
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const products = await Product.find({}).sort({ Date: -1 })
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/filter/qty-most", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const products = await Product.find({}).sort({ qty: -1 })
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/filter/qty-less", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const products = await Product.find({}).sort({ qty: 1 })
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/filter/cost-most", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const products = await Product.find({}).sort({ price: -1 })
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/filter/cost-less", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const products = await Product.find({}).sort({ price: 1 })
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/size/:size", async (req, res) => {
    try {
        const id = req.cookies.id
        const user = await User.findOne({ _id: id })
        if(user){
            if(user.isAdmin == true || user.permissions.includes('Storage')){
                const getSize = req.params.size
                const products = await Product.find({ size: getSize})
                const size = await Size.find({})

                const totalSell = []
                const totalBuy = []
                for (let i = 0; i < products.length; i++) {
                    totalSell.push(products[i].qty * products[i].sell_price)
                }

                for (let i = 0; i < products.length; i++) {
                    totalBuy.push(products[i].qty * products[i].price)
                }
                res.render("storage/storage", {
                    user: user,
                    products: products,
                    size: size,
                    totalSell: totalSell.reduce((a, b) => a + b),
                    totalBuy: totalBuy.reduce((a, b) => a + b),
                })
            } else {
                req.flash("permission-error", "error")
                res.redirect("/")
            }
        } else {
            res.redirect("/passport/sign-up")
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router