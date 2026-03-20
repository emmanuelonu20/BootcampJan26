import { Component } from '@angular/core';
import { Idoctor } from '../../interfaces/idoctor';
import { Ipatient } from '../../interfaces/ipatient';
import { DoctorService } from '../../services/doctor-service';
import { PatientService } from '../../services/patient-service';

@Component({
  selector: 'app-hospital',
  standalone: false,
  templateUrl: './hospital.html',
  styleUrl: './hospital.css',
})
export class Hospital {
  //properties
  doctors!: Idoctor[];
  patients!: Ipatient[];

  constructor(private doctorService: DoctorService, private patientService: PatientService) {
    this.doctors = doctorService.getDoctors();
    this.patients = patientService.getPatients();
  }
}
