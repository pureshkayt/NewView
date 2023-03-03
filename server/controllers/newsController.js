const uuid = require('uuid')
const path = require('path')
const {Blog, ArticleInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op} = require('sequelize')



class NewsController {
    async create(req, res, next) {
        try {
        const {name, description, time} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" || uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const blog = await Blog.create({
            name,
            description,
            img: fileName,
            time
        });

        return res.json(blog)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
        const {id} = req.params
        const {name, description, time} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" || uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const blog = await Blog.update({
            name,
            description,
            img: fileName,
            time}, {where: {id}})
        return res.json(blog)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
    }

    async getALL(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let blogs;
        blogs = await Blog.findAndCountAll({
            where: {
                id: {
                    [Op.gt]: 1 // This will filter the products with id greater than 1
                }
            },
            order: [['id', 'DESC']],
            limit,
            offset
        })
        return res.json(blogs)
    }
    async getOne(req, res) {
        const {id} = req.params
        const blog = await Blog.findOne(
            {
                where: {id},
                include: [{model: ArticleInfo, as: 'info'}]
            },
        )
        return res.json(blog)
    }
    async delete(req, res) {
        const {id} = req.params
        const blog = await Blog.destroy({where: {id}})
        return res.json(blog)
    }

}

module.exports = new NewsController()
