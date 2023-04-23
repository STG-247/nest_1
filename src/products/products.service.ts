import { Product } from './product.model';
import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsService {

    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number): string {
        const newProduct = new Product(Math.random().toString(), title, desc, price);
        this.products.push(newProduct);
        return newProduct.id;
    }

    getAllProducts(): Product[] {
        return [...this.products];
    }

    getProduct(prodId: string): Product {
        return this.products.find((p) => p.id === prodId);
    }

    updateProduct(id: string, title: string, desc: string, price: number): Product {
        const prodIndx = this.products.findIndex((p) => p.id === id);
        if (prodIndx !== -1) {
            let res = Object.assign({}, this.products[prodIndx]);
            res.title = title;
            res.description = desc;
            res.price = price;

            this.products[prodIndx] = res;

            return res;
        }
        return null;
    }

}