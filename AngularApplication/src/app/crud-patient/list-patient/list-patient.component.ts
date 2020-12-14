import {Component, Input, OnInit} from '@angular/core';
import {CrudPatientService} from '../../services/crud-patient-services/crud-patient-service';
import {CrudPatientComponent} from '../crud-patient.component';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patientsList: [];
  @Input() parentComponent: CrudPatientComponent;
  searchTerm = 'st';

  constructor(private crudPatientService: CrudPatientService) {
    this.listPatient();
  }

  ngOnInit(): void {
    this.listPatient();
  }

  listPatient(): void {
    const ApiCall = this.crudPatientService.listPatient(this.searchTerm);
    const that = this;
    ApiCall.subscribe(res => {
      that.patientsList = res.entry;
    });
  }

  edit(resource: any): void {
    this.parentComponent.edit(resource);
  }

  delete(resourceUrl: any): void {
    const ApiCall = this.crudPatientService.deletePatient(resourceUrl);
    const that = this;
    ApiCall.subscribe(res => {
      that.listPatient();
    });

  }
}
