import {Component, Input, OnInit} from '@angular/core';
import {CqlSearchComponent} from '../cql-search.component';
import cqlfhir from 'cql-exec-fhir';
import {CrudPatientService} from '../../services/crud-patient-services/crud-patient-service';
import cql from 'cql-execution';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-run-library',
  templateUrl: './run-library.component.html',
  styleUrls: ['./run-library.component.css']
})
export class RunLibraryComponent implements OnInit {
  @Input() parentComponent: CqlSearchComponent;
  @Input() library: any;
  libObject: any;
  patientList = [];

  constructor(private crudPatientService: CrudPatientService) {

  }

  ngOnInit(): void {
    this.libObject = JSON.parse(this.library);
    this.makeitwork();
  }

  // Important resources
  // https://github.com/cqframework/cql-exec-examples/blob/master/diabetic-foot-exam/runner.js
  makeitwork(): void {
    this.patientList = [];
    const apiCall = this.crudPatientService.listPatient('stevens');
    apiCall.subscribe(res => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < res.entry.length; i++){
        const apiCall2 = this.crudPatientService.listSinglePatientBundle(res.entry[i].fullUrl);
        apiCall2.subscribe((res2) => {
          // library from FHIR SERVER (passed to component
          const query = this.libObject.resource.content[0].data;
          const decodedCqlJson = atob(query);
          const libraries = {
            FHIRHelpers: environment.fhirhelper
          };
          const lib = new cql.Library(JSON.parse(decodedCqlJson), new cql.Repository(libraries));
          const executor = new cql.Executor(lib);
          const patientSource = cqlfhir.PatientSource.FHIRv400();
          patientSource.loadBundles([res2]);
          const results = executor.exec(patientSource);
          this.patientList.push(results.patientResults[Object.keys(results.patientResults)[0]]);
        });
      }
    });
  }
}
