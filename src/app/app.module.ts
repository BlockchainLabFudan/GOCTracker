import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {SearchComponent} from './components/search/search.component';
import {BlockService} from './services/block.service';
import {TransactionService} from './services/transaction.service';
import {DashboardService} from './services/dashboard.service';
import {AccountService} from './services/account.service';
import {ProducerService} from './services/producer.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';
import {EosService} from './services/eos.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Ng2Webstorage} from 'ngx-webstorage';
import { SettingsComponent } from './components/settings/settings.component';
import {CmcService} from './services/cmc.service';
import {ActionService} from './services/action.service';
import {StatService} from './services/stat.service';
import {VoteService} from './services/vote.service';
import {BpService} from './services/bp.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'transactions/:id', component: TransactionComponent},
  {path: 'accounts', loadChildren: './account/account.module#AccountModule'},
  {path: 'blocks', loadChildren: './block/block.module#BlockModule'},
  {path: 'actions', loadChildren: './contract/contract.module#ContractModule'},
  {path: 'producers', loadChildren: './producer/producer.module#ProducerModule'},
  {path: 'settings', component: SettingsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionsComponent,
    TransactionComponent,
    SearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
    BlockService,
    TransactionService,
    DashboardService,
    EosService,
    AccountService,
    ProducerService,
    CmcService,
    ActionService,
    StatService,
    VoteService,
    BpService,
    {provide: JsonPipe, useClass: SafeJsonPipe}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
