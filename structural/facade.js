class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complain){}

    add(complain){
        this.complaints.push(complain)
        return this.reply(complain)
    }
}

class ProductComplaints extends Complaints{
    reply({id, customer, details}) {
        return `Product: ${id}: customer ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id, customer, details}) {
        return `Service: ${id}: customer ${customer} (${details})`
    }
}

class  ComplaintRegestry {
    register(customer, type, details){
        const id = Date.now()
        let complaint

        if(type === 'service'){
            complaint = new  ServiceComplaints()
        }else{
            complaint = new ProductComplaints()
        }
        return complaint.add({id, customer, details})
    }
}

const registery = new ComplaintRegestry()

console.log(registery.register('Vitalik', 'service', 'Not access'))
console.log(registery.register('Elena', 'product', 'Errors messages'))