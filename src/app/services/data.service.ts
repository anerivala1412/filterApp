import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Item {
  modelName: string;
  ram: string;
  hdd: string;
  location: string;
  price: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  filterUrl = 'assets/data_filter.csv';
  public userArray = [];
  constructor(private http: HttpClient) {}

  public getMessages() {
    return this.http.get(this.filterUrl, { responseType: 'text' });
  }
}
