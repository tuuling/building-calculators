import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-woodgrade',
  template: `
    <div class="form-group">
      <label for="woodgrade-input">Puidu tugevusklass:</label>
      <select class="form-control form-control-sm" id="woodgrade-input" [(ngModel)]="woodgrade" (ngModelChange)="woodgradeChange.emit($event)">
        <optgroup label="Saematerajal">
          <option [ngValue]="'c14'">C14</option>
          <option [ngValue]="'c16'">C16</option>
          <option [ngValue]="'c18'">C18</option>
          <option [ngValue]="'c20'">C20</option>
          <option [ngValue]="'c22'">C22</option>
          <option [ngValue]="'c24'">C24</option>
          <option [ngValue]="'c27'">C27</option>
          <option [ngValue]="'c30'">C30</option>
          <option [ngValue]="'c35'">C35</option>
          <option [ngValue]="'c40'">C40</option>
          <option [ngValue]="'c45'">C45</option>
          <option [ngValue]="'c50'">C50</option>
        </optgroup>
        <optgroup label="Liimpuit">
          <option [ngValue]="'gl20h'">GL20h</option>
          <option [ngValue]="'gl22h'">GL22h</option>
          <option [ngValue]="'gl24h'">GL24h</option>
          <option [ngValue]="'gl28h'">GL28h</option>
          <option [ngValue]="'gl30h'">GL30h</option>
          <option [ngValue]="'gl32h'">GL32h</option>

          <option [ngValue]="'gl20c'">GL20c</option>
          <option [ngValue]="'gl22c'">GL22c</option>
          <option [ngValue]="'gl24c'">GL24c</option>
          <option [ngValue]="'gl28c'">GL28c</option>
          <option [ngValue]="'gl30c'">GL30c</option>
          <option [ngValue]="'gl32c'">GL32c</option>
        </optgroup>

      </select>
    </div>
  `
})
export class WoodgradeComponent {
  @Input() woodgrade: string;
  @Output() woodgradeChange = new EventEmitter<string>();

}
