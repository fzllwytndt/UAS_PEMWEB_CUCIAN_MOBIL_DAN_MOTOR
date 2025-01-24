import { v4 as uuidv4 } from 'uuid';

class Customer {
    constructor(name, email) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
    }

    static async create(customerData) {
        // Logic to create a new customer in the database
    }

    static async read(customerId) {
        // Logic to read a customer from the database
    }

    static async update(customerId, updatedData) {
        // Logic to update a customer in the database
    }

    static async delete(customerId) {
        // Logic to delete a customer from the database
    }
}

export default Customer;