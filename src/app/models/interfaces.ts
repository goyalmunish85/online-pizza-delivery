export interface PizzaInterface
{
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface OrderInterface
{
    id: number;
    name: string;
    quantity: number;
    description: string;
    price: number;
}

export const CategoryInterface = ['Veg', 'Non-Veg'];