import {Cart} from './cart';
import { pizza } from './pizza'; 


export class order
{
    public u_id : string;
    public status: string;
    public bill: number;
    public pizzas: pizza[];
}

