import {$authHost, $host} from "./index";

export const createLabel = async (blog) => {
    const {data} = await $authHost.post('api/news', blog)
    return data
}
export const fetchLabels = async (page, limit= 5) => {
    const {data} = await $host.get('api/news', {params: {
            page, limit
        }})
    return data
}
export const deleteBlog = async (id) => {
    const {data} = await $authHost.delete('api/news/' + id)
    return data
}
export const updateBlog = async (id, formData) => {
    const {data} = await $authHost.put('api/news/' + id, formData)
    return data
}
export const fetchOneBlog = async (id) => {
    const {data} = await $host.get('api/news/' + id)
    return data
}
