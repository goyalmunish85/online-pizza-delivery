import { Injectable } from '@angular/core';

@Injectable()
export class UserIdService {
  id: string;
  constructor() { 
    this.id = ""; 
  }
  getId(){
    return this.id;
  }
  setId(i: string){
    this.id = i;
  }
}
