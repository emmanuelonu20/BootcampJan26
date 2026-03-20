import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/ipatient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: Ipatient[] = [
    {name: 'James Smith', illness: 'Cough'},
    {name: 'Victoria Benneth', illness: 'Cold'},
    {name: 'Martin Ben', illness: 'Flu'},
  ];

  getPatients(){
    return this.patients;
  }
}
