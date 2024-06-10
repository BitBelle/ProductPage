import {Request} from 'express'

export interface Product{
    id:number
    title:string
    description:string
    price: number
}


export interface AddProduct{

    title:string
    description:string
    price: number
   
}
export interface TypedBody extends Request{

    body:AddProduct
}

