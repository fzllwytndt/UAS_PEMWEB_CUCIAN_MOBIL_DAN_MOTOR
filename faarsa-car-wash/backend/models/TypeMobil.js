import { Model } from 'some-orm-library'; // Replace with actual ORM library import

class TypeMobil extends Model {
    constructor(id, typeName) {
        super();
        this.id = id;
        this.typeName = typeName;
    }

    static tableName() {
        return 'typemobil';
    }

    static async create(typeName) {
        const newTypeMobil = new TypeMobil(null, typeName);
        return await newTypeMobil.save();
    }

    static async findById(id) {
        return await this.query().findById(id);
    }

    static async update(id, typeName) {
        const typeMobil = await this.findById(id);
        if (typeMobil) {
            typeMobil.typeName = typeName;
            return await typeMobil.save();
        }
        return null;
    }

    static async delete(id) {
        const typeMobil = await this.findById(id);
        if (typeMobil) {
            return await typeMobil.remove();
        }
        return null;
    }
}

export default TypeMobil;