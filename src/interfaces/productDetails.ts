export interface ProductDetails {
    id: number
    name: string
    price: number
    original_price?: number
    ProductsImages: {
        url: string
    }[]
    Category: {
        name: string
    }
    rating: number
    reviews?: number
    is_new?: boolean
    discount?: number
    description: string
    feature?: string[]
    specifications?: Record<string, string>
    shipping: string
    warranty: string
    return: string
}