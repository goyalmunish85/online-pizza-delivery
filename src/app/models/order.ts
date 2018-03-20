export class order
{
    public id: number;
    public name: string;
    public quantity: number;
    public description: string;
    public price: number;
    constructor(id: number,name: string,quantity:number,description: string,price: number){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.price = price;
    }
}