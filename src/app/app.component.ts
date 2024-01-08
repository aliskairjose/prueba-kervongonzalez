import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica';
  response: any;
  page = 1;

  constructor(
    private _apiSrv: ApiService
  ){
    this.loadData()
  }

  loadData(page = 1): any {
    let params = new HttpParams()
    params = params.set('page', page)
    this._apiSrv.getData(params).subscribe(response => this.response = response)
  }

}
