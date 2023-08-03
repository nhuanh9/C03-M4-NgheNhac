import {AppDataSource} from "../data-source";
import {Album} from "../entity/Album";
import {Service} from "./Service";

class AlbumService implements Service<Album>{

    private repository = AppDataSource.getRepository(Album)

    findAll = async () => {
        return this.repository.find()
    }
    add = async (data) => {
        return this.repository.save(data)
    }

    delete(id) {
        return this.repository.delete(id)
    }

    findById(id) {
        return this.repository.findOne({
            where: {
                id: id
            }
        })
    }

    update(id, data) {
        return this.repository.update(id, data)
    }

}
export default new AlbumService()