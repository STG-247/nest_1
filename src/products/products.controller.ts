import { Product } from './product.model';
import { ProductsService } from './products.service';
import { Body, Controller, Get, NotFoundException, Param, Post, Patch } from '@nestjs/common';


@Controller('products')
export class ProductsController {

    constructor(private readonly prodSrv: ProductsService){

    }

    @Post()
    addProduct(@Body('title')prodTitle: string, @Body('description')prodDesc: string, @Body('price')prodPrice: number): any {
        const id = this.prodSrv.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id};
    }

    @Get()
    getAllProducts(): Product[]{
        return this.prodSrv.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id')id: string): Product{
        const product = this.prodSrv.getProduct(id);
        if(!product){
            throw new NotFoundException(`Product with id = ${id}, not found.` );
        }
        return {...product};
    }

    @Patch()
    updateProduct(@Body('id')id: string, @Body('title')prodTitle: string, @Body('description')prodDesc: string, @Body('price')prodPrice: number): Product {
        const prod = this.prodSrv.updateProduct(id, prodTitle, prodDesc, prodPrice);
        if(prod){
            return prod;
        }
        throw new NotFoundException(`Product with id = ${id}, not found. Cannot update.`);
    }
}