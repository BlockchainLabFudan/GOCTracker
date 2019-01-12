import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, share, catchError } from 'rxjs/operators';
import { EosService } from '../../services/eos.service';
import { Result } from '../../models';
//import { AppService } from '../../services/app.service';

@Component({
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  id$: Observable<number>;
  proposal$: Observable<Result<any>>;

  constructor(
    private route: ActivatedRoute,
    private eosService: EosService,
    //private appService: AppService
  ) { }

  ngOnInit() {
    this.id$ = this.route.params.pipe(
      map(params => +params.id)
    );
    this.proposal$ = this.id$.pipe(
      switchMap(id => this.eosService.getProposalRaw(id))
    );
  }

}
