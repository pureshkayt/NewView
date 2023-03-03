import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._articles = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }
    setArticle(articles) {
        this._articles = articles
    }
    setPageArt(page) {
        this._page = page
    }
    setTotalCountArt(count) {
        this._totalCount = count
    }
    get articles() {
        return this._articles
    }
    get totalCountArt() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }


}
