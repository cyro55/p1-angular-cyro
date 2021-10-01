import { Component, OnInit } from '@angular/core';
import { CyroWalletService } from '../cyroWallet.service';


@Component({
  selector: 'app-cyro-wallet',
  templateUrl: './cyro-wallet.component.html',
  styleUrls: ['./cyro-wallet.component.css']
})
export class CyroWalletComponent implements OnInit {

  constructor(public cyroWallet: CyroWalletService) { }

  ngOnInit() {
  }

}