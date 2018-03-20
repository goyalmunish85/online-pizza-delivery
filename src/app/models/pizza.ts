export class pizza
{
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public category: string;
    constructor(id: number,name: string,description: string,price: number, category:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

export const Category = ['Veg', 'Non-Veg'];