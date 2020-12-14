import {Component, Input, OnInit} from '@angular/core';
import {CrudPatientService} from '../../services/crud-patient-services/crud-patient-service';
import {CrudPatientComponent} from '../crud-patient.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  lastOutput: any;
  @Input() parentComponent: CrudPatientComponent;
  @Input() patientAsText: string;
  @Input() patientURL: string;

  constructor(private crudPatientService: CrudPatientService) {
  }

  ngOnInit(): void {
  }

  updatePatient(): void {
    const obj = JSON.parse(this.patientAsText);
    const APICall = this.crudPatientService.updatePatient(obj, this.patientURL);
    const that = this;
    APICall.subscribe(res => {
      that.cancelAddPatient();
    });
  }

  addPatient(): void {
    const obj = JSON.parse(this.patientAsText);
    const APICall = this.crudPatientService.addPatient(obj);
    const that = this;
    APICall.subscribe(res => {
      that.lastOutput = res;
      that.parentComponent.edit(res);
    });
  }

  cancelAddPatient(): void{
    this.parentComponent.currentPatientURL = undefined;
    this.parentComponent.currentPatient = '{\n' +
      '  "resourceType": "Patient",\n' +
      '  "identifier": [\n' +
      '    {\n' +
      '      "system": "stevens.club/patient",\n' +
      '      "value": "1"\n' +
      '    }\n' +
      '  ],\n' +
      '  "name": [\n' +
      '    {\n' +
      '      "family": "Stevens",\n' +
      '      "given": [\n' +
      '        "Christophe",\n' +
      '        "Stevens"\n' +
      '      ]\n' +
      '    }\n' +
      '  ]\n' +
      '}';
  }
}
