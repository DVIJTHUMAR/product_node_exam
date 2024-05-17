const electroProductModel = require("../models/electroProduct");
const fs = require('fs');

const defultController = (req, res) => {

    res.render("index");

}

const addProductController = async (req, res) => {

    var { editId } = req.body;

    if (!editId) {
        const productData = new electroProductModel({
            Pro_name: req.body.Pro_name,
            price: req.body.price,
            brand: req.body.brand,
            description: req.body.description,
            color: req.body.color,
            proImage: req.file.path

        })
        console.log('pro dataa ', productData);

        await productData.save();
    } else {

        await electroProductModel.findByIdAndUpdate(editId, {
            Pro_name: req.body.Pro_name,
            price: req.body.price,
            brand: req.body.brand,
            description: req.body.description,
            color: req.body.color,
            
        })
        console.log("Edit Done..");
    }
    res.redirect("/views");
}

const viewController = async (req, res) => {
    const ElecProducts = await electroProductModel.find({});
    res.render('views', { ElecProducts });
    console.log("viwes Done...");
}

const deleteController = async (req, res) => {
    const id = req.params.id;

    let deleteProduct = await electroProductModel.findOne({ _id: id });

    console.log('dededede', deleteProduct);

    fs.unlinkSync(`${deleteProduct.proImage}`)

    await electroProductModel.deleteOne({ _id: id });
    res.redirect("/views");
    console.log("delet done....");
}

const editController = async (req, res) => {
    const id = req.params.id;

    const singleElecProduct = await electroProductModel.findById(id)

    res.render("edit", { singleElecProduct });

}


module.exports = { defultController, addProductController, viewController, deleteController, editController }