import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/idoctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctors: Idoctor[] = [
    {name: 'Peter Pan', specialization: 'Dentist'},
    {name: 'Jennifer Lopez', specialization: 'Skin'}
  ];

  getDoctors() {
    return this.doctors;
  }
}
