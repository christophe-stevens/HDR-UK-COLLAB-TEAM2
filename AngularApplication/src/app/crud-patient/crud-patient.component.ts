import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {CrudPatientService} from '../services/crud-patient-services/crud-patient-service';

@Component({
  selector: 'app-crud-patient',
  templateUrl: './crud-patient.component.html',
  styleUrls: ['./crud-patient.component.css']
})
export class CrudPatientComponent implements OnInit {


  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private crudPatientService: CrudPatientService) { }

  selectedPanel = '#patientList';
  that = this;
  currentPatientURL: string;
  currentPatient = '{\n' +
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

  ngOnInit(): void {
  }

  toggleClass($event: MouseEvent, panel: string): void {
    this.selectedPanel = panel;
    const arrNav = this.elRef.nativeElement.querySelectorAll('.nav-link');
    arrNav.forEach( (x) => {
      x.classList.remove('active');
    });
    if ( panel === '#patientList' ){
      this.elRef.nativeElement.querySelectorAll('#patientListTab').forEach((el) => {
        el.classList.add('active');
      });
    }else{
      this.elRef.nativeElement.querySelectorAll('#patientAddUpdateTab').forEach((el) => {
        el.classList.add('active');
      });
    }
    this.selectPanel(panel);
  }

  selectPanel(panel: string): void{
    const panels = this.elRef.nativeElement.querySelectorAll('.tab-pane');
    panels.forEach( (x) => {
      if ( x ){
        x.classList.remove('active');
      }
    });
    const panelObj = this.elRef.nativeElement.querySelector(panel);
    if ( panelObj ){
      this.renderer.addClass(panelObj, 'active' );
    }
  }

  edit(resource: any): void {
    this.currentPatient = JSON.stringify(resource.resource);
    this.currentPatientURL = resource.fullUrl;
    this.toggleClass(undefined, '#patientAddUpdate');
  }


}
