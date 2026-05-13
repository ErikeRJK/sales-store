export interface Product {
    id: number
    name: string
    price: number
    original_price?: number
    rating?: number
    reviews?: number
    is_new?: boolean
    discount?: number
    ProductsImages: {
        url: string
    }[]
    Category: {
        name: string
    }
}