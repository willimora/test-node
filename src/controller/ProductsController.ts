import { Products } from './../entity/Products';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

class ProductsController {

  static getAll = async (req: Request, res: Response) => {
    const productsRepository = getRepository(Products);
    let products;

    try {
      products = await productsRepository.find();
    } catch (error) {
      res.status(404).json({ message: 'no se encontraron resultados' })
    }

    if (products.length > 0) {
      res.send(products)
    } else {
      res.status(404).json({ message: 'error' })
    }
  }

  static new = async (req: Request, res: Response) => {
    const { description, price } = req.body

    const productsRepository = getRepository(Products)
    let product = new Products();

    product.description = description;
    product.price = price;

    try {
      await productsRepository.save(product)
    } catch (error) {
      res.status(404).json({ message: 'Error al cargar producto' })
    }

    res.status(200).json({ message: 'Producto agregado exitosamente' })
  }

}



export default ProductsController
