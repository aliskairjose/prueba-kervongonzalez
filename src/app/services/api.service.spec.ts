import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObject('HttpClient', ['get']);
    service = new ApiService(httpClientSpy as any);
    service = TestBed.inject(ApiService);
  });

  it('Debe crearse correctamente', (done: DoneFn) => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar data incluyendo productos', ()=>{
    service.getData(1).subscribe(response =>{
      expect(response).toBe('observable value');
      done();
    })
  })

});
