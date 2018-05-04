import { Injectable } from '@angular/core';

@Injectable()
export class UserIdService {
  id: string;
  name: string;
  constructor() { 
    this.name =  "";
    this.id = ""; 
  }
  getId(){
    return this.id;
  }
  setId(i: string){
    this.id = i;
  }
  setName(n: string){
    this.name = n;
  }
  getName(){
    return this.name;
  }
}
