import ormService from '../services/ormService';

class Transaksi {
    constructor(id, customerId, transactionDate) {
        this.id = id;
        this.customerId = customerId;
        this.transactionDate = transactionDate;
    }

    static async create(data) {
        const transaksi = new Transaksi(data.id, data.customerId, data.transactionDate);
        return await ormService.create('transaksi', transaksi);
    }

    static async read(id) {
        return await ormService.read('transaksi', id);
    }

    static async update(id, data) {
        return await ormService.update('transaksi', id, data);
    }

    static async delete(id) {
        return await ormService.delete('transaksi', id);
    }

    static async getAll() {
        return await ormService.getAll('transaksi');
    }
}

export default Transaksi;