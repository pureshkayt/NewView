const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const {Op} = require("sequelize");

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" || uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async update(req, res, next) {
        try {
        const {id} = req.params
        const {name, price} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" || uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.update({
            name: name,
            price: price,
            img: fileName,
        }, {where: {id}})
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {id: {
                        [Op.gt]: 1 // This will filter the products with id greater than 1
                    }},
                order: [['id', 'DESC']],
                limit,
                offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId, id: {
                        [Op.gt]: 1 // This will filter the products with id greater than 1
                    }}, order: [['id', 'DESC']], limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, id: {
                        [Op.gt]: 1 // This will filter the products with id greater than 1
                    }}, order: [['id', 'DESC']], limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId, id: {
                        [Op.gt]: 1 // This will filter the products with id greater than 1
                    }}, order: [['id', 'DESC']], limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
    async delete(req, res) {
        const {id} = req.params
        const device = await Device.destroy({where: {id}})
        return res.json(device)
    }
    async search(req, res) {
        const {id} = req.params
        const searchQuery = req.query.q;
        const device = await Device.findAll({
            where: {
                name: { [Op.iLike]: `%${searchQuery}%` },
            }
        });
        res.json(device);
    }
}

module.exports = new DeviceController()