import {AppDataSource} from "../data-source";
import {Product} from "../entity/Product";
import {Service} from "./Service";

class ProductService implements Service<Product> {
    private repository = AppDataSource.getRepository(Product);

    findAll = async () => {
        return await this.repository.find({
            relations: {
                category: true
            }
        });
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findById = async (id) => {
        return await this.repository.find({where: {id: id}});
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

}
export default new ProductService();
