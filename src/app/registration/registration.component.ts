import { Component } from '@angular/core';

export interface Mattress {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  mattresses: Mattress[] = [
    { value: 'casper', viewValue: 'Casper' },
    { value: 'temper-pedic', viewValue: 'Temper-Pedic' },
    { value: 'sleepnumber', viewValue: 'Sleep Number' },
    { value: 'serta', viewValue: 'Serta' },
    { value: 'sealy', viewValue: 'Sealy' },
    { value: 'nest', viewValue: 'Nest' },
    { value: 'nectar', viewValue: 'Nectar' },
    { value: 'zenhaven', viewValue: 'Zenhaven' },
    { value: 'other', viewValue: 'Other' }
  ];
}
