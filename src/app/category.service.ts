import { Observable } from 'rxjs';
import { Analgesics } from './analgesics/model/analgesics';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:8086/get-item-by";
  private updateItemURL = "http://localhost:8086/updateItem"
  private deleteItemURL = "http://localhost:8086/delete-item";

  constructor(private httpClient : HttpClient) { }

  public getAnalgesicsList(): Observable<Analgesics[]>{
    
    return this.httpClient.get<Analgesics[]>('http://localhost:8086/get-analgesics-list');
  }

  public addNewItem(analgesics : Analgesics): Observable<object>{
    return this.httpClient.post('http://localhost:8086/add-new-item', analgesics);
  }

  public getItemById(id : number) : Observable<Analgesics>{
    return this.httpClient.get<Analgesics>(`${this.baseURL}/${id}`);
  }

  public saveToCart(analgesics : Analgesics) : Observable<object>{
    return this.httpClient.post('http://localhost:8086/add-to-cart', analgesics);
  }

  public deleteItem(id : number) : Observable<object>{
    return this.httpClient.delete(`${this.deleteItemURL}/${id}`);
  }

  public getUpdateItemById(id : number) : Observable<Analgesics>{
    return this.httpClient.get<Analgesics>(`${this.baseURL}/${id}`);
  }

  updateItem(id : number, updateAnalg : Analgesics) : Observable<object>{
    return this.httpClient.put(`${this.updateItemURL}/${id}`, updateAnalg);
  }
}
