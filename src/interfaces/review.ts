export interface Review {
    id: number
    productId: number
    author: string
    timestamp: string
    rating: number
    comment: string
    images?: string[]
}