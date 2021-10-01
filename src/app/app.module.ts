import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { CyroWalletService } from './cyroWallet.service';
import { RouterModule } from '@angular/router';
import { CyrocurrencyComponent } from './cyrocurrency/cyrocurrency.component';
import { CyroWalletComponent } from './cyro-wallet/cyro-wallet.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'historico', component: CyrocurrencyComponent},
        {path: 'carteira', component: CyroWalletComponent}
      ]
    ) ],
  declarations: [ AppComponent, HelloComponent, CyrocurrencyComponent, CyroWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CyroWalletService],
})
export class AppModule { }