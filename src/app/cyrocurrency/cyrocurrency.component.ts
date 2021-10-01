import { Component, OnInit } from '@angular/core';
import { CyroWalletService } from '../cyroWallet.service';


@Component({
  selector: 'app-cyrocurrency',
  templateUrl: './cyrocurrency.component.html',
  styleUrls: ['./cyrocurrency.component.css']
})
export class CyrocurrencyComponent implements OnInit {

  constructor(public cyroWallet: CyroWalletService) { }

  ngOnInit() {
  }

}