import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usageclass',
  template: `
    <div class="form-group">
      <label for="kasutusklass-input">Kasutusklass: <span
        class="badge badge-secondary align-text-bottom c-pointer" [ngbPopover]="helpText">?</span></label>
      <select [(ngModel)]="usageClass" (ngModelChange)="usageClassChange.emit($event)" class="form-control form-control-sm" id="kasutusklass-input">
        <option [ngValue]="1">1 - Kuiv ruum</option>
        <option [ngValue]="2">2 - Niiske Ruum</option>
        <option [ngValue]="3">3 - Välistingimused</option>
      </select>
    </div>
    <ng-template #helpText>
      <strong>Kasutusklass 1</strong>:
      <p>20 °C juures: Õhuniiskus kuni 65%, puidu suhteline niiskus okaspuidul kuni 12%</p>
      <p>Köetavatad siseruumid, soojustatud konstruktsioonid ja talad mille tõmbetsoon on soojustatud</p>

      <strong>Kasutusklass 2</strong>:
      <p>20 °C juures: Õhuniiskus kuni 85%, ületatakse mõneks nädalaks aastas. Puidu suhteline niiskus okaspuidul kuni
        20%</p>
      <p>Välitingimustes asuvad konstruktsioonid mis on kaitsut märgumise eest ja on tuulutatud.</p>

      <strong>Kasutusklass 3</strong>:
      <p>Kõrgem kui kasutusklass 2</p>
      <p></p>
    </ng-template>
  `
})
export class UsageclassComponent {
  @Input() usageClass: number;
  @Output() usageClassChange = new EventEmitter<number>();
}
