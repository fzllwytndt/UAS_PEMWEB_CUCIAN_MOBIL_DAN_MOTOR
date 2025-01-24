import { Model } from 'some-orm-library';

class JenisCucian extends Model {
    constructor() {
        super();
        this.id = null;
        this.typeName = '';
    }

    static tableName() {
        return 'jeniscucian';
    }

    static async create(data) {
        const jenisCucian = new JenisCucian();
        jenisCucian.typeName = data.typeName;
        return await jenisCucian.save();
    }

    static async findById(id) {
        return await this.query().findById(id);
    }

    static async update(id, data) {
        const jenisCucian = await this.findById(id);
        if (jenisCucian) {
            jenisCucian.typeName = data.typeName;
            return await jenisCucian.save();
        }
        return null;
    }

    static async delete(id) {
        const jenisCucian = await this.findById(id);
        if (jenisCucian) {
            return await jenisCucian.remove();
        }
        return null;
    }
}

export default JenisCucian;