const router = require("express").Router();
const { Category, Product } = require("../../models");


router.get("/", async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        });
        if (!categoryData) {
            res.status(404).json({
                message: `That doesn't exist.`,
            });
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(`Category created!`);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const categoryData = await Category.update(req.body, {
            where: {id:req.params.id}
        });
        if (!categoryData) {
            res.status(404).json(`That doesnt exist.`);
        }
        res.status(200).json(`Updated!`);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!categoryData) {
            res.status(404).json(`That doesn't exist`);
        }
        res.status(200).json(`Deleted`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
