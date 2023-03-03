const {Slider, Blog} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require("uuid");
const path = require("path");

class SliderController {
    async create(req, res, next) {
        try {
        const {title, url } = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" || uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const slider = await Slider.create({title, url, img: fileName});
        return res.json(slider)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const sliders = await Slider.findAll()
        return res.json(sliders)
    }
    async delete(req, res) {
        const {id} = req.params
        const slider = await Slider.destroy({where: {id}})
        return res.json(slider)
    }

}

module.exports = new SliderController()