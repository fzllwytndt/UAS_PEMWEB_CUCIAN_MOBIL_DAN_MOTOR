import ormService from '../services/ormService';

class Pendaftaran {
    constructor(id, customerId) {
        this.id = id;
        this.customerId = customerId;
    }

    static async create(data) {
        const newPendaftaran = new Pendaftaran(null, data.customerId);
        return await ormService.create('pendaftaran', newPendaftaran);
    }

    static async read(id) {
        return await ormService.read('pendaftaran', id);
    }

    static async update(id, data) {
        return await ormService.update('pendaftaran', id, data);
    }

    static async delete(id) {
        return await ormService.delete('pendaftaran', id);
    }

    static async getAll() {
        return await ormService.getAll('pendaftaran');
    }
}

export default Pendaftaran;