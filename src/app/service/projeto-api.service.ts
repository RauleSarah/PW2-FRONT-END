import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {
  apiURL: string = "http://quiteriaetec.somee.com/"

  constructor() { }
}
