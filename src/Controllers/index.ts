import {Request, Response} from 'express'
import { Product, TypedBody } from '../Models'

const products:Product[]=[]

export function get(req:Request, res:Response){
    res.status(200).json(products)
}

export const addProduct=(req:TypedBody, res:Response)=>{
   
 const {title,description,price} = req.body
    let newproduct:Product={
        id:Math.floor(Math.random() * 10000),
        title,
        description,
        price
    }

    products.push(newproduct)
    res.status(201).json({message:"Product Added Successfully"})
}

export function getProduct(req:Request<{id:string}>, res:Response){
    // we need an Id 
    const id = +req.params.id
    //get todo
    const product= products.find(x=>x.id===id)

    if(product!=undefined){
        return res.status(200).json(product)
    }
    return res.status(200).json({message:"Product Found"})
}

export function getProducts(req:Request, res:Response){
    // we need an Id 
    
    //get todo
    
    return res.status(200).json(products)
}

export function updateProduct(req:Request<{id:string}>, res:Response){
    // we need an Id 
    const id = +req.params.id
    //get todo
    const product= products.find(x=>x.id===id)
    const {title,description,price} = req.body
    if(product!=undefined){
            product.description=description
            product.title=title
            product.price=price
        return res.status(200).json({message:`Product ${id} updated`})
    }
    return res.status(404).json({message:"Product Not Found"})
}


export const deleteProduct=(req:Request<{id:string}>, res:Response)=>{
    // we need an Id 
    const id = +req.params.id
    //get todo
    const index= products.findIndex(x=>x.id===id)

    if(index>=0){
        products.splice(index,1)
        return res.status(200).json({message:`Product ${id} deleted`})
    }
    return res.status(404).json({message:"Product Not Found"})
}


