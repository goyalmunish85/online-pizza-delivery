export class pizza
{
    public image: string;
    public name: string;
    public description: string;
    public price: number;
    public category: string;
    constructor(id: number,image:string,name: string,description: string,price: number, category:string){
        
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

export const Category = ['Veg', 'Non-Veg'];