import { Component, VERSION } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {CyroWalletService} from './cyroWallet.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private http:HttpClient, public bitCoinRate: CyroWalletService){}

  ngOnInit(){
    this.bitCoinRate.start();
  }
}
