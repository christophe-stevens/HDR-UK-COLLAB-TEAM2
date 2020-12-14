import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-cql-search',
  templateUrl: './cql-search.component.html',
  styleUrls: ['./cql-search.component.css']
})
export class CqlSearchComponent implements OnInit {

  selectedPanel = '#libraryList';
  that = this;
  currentLibraryURL: any;
  currentLibrary = '{\n' +
    '\t"resourceType":"Library",\n' +
    '\t"version":"1.0.0",\n' +
    '\t"name": "WorkedExample",\n' +
    '\t"title": "WorkedExample - Otitis Media",\n' +
    '\t"status": "active",\n' +
    '\t"type":  {\n' +
    '    "coding": [\n' +
    '\t\t\t\t  {\n' +
    '\t\t\t\t\t"code": "model-definition"\n' +
    '\t\t\t\t  }\n' +
    '\t\t\t\t]\n' +
    '\t\t\t  }, \n' +
    '\t"publisher": "HL7 UK Comp",\n' +
    '\t"description": "HL7 UK Comp",\n' +
    '\t"useContext": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"code": {\n' +
    '\t\t\t\t\t"code": "model-definition"\n' +
    '\t\t\t\t  },\n' +
    '\t\t\t\t"valueCodeableConcept": {\n' +
    '\t\t\t\t\t\t"coding": [\n' +
    '\t\t\t\t\t\t\t{\n' +
    '\t\t\t\t\t\t\t\t"system": "http://snomed.info/sct",\n' +
    '\t\t\t\t\t\t\t\t"code": "65363002",\n' +
    '\t\t\t\t\t\t\t\t"display": "Otitis media"\n' +
    '\t\t\t\t\t\t\t}\n' +
    '\t\t\t\t\t\t]\n' +
    '\t\t\t\t}\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"content": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"contentType": "text/cql",\n' +
    '\t\t\t\t"data":"bGlicmFyeSBXb3JrZWRFeGFtcGxlIHZlcnNpb24gJzEnICANCg0KdXNpbmcgRkhJUiB2ZXJzaW9uICc0LjAuMCcgICAgIA0KDQppbmNsdWRlICJGSElSSGVscGVycyIgdmVyc2lvbiAnNC4wLjAnIGNhbGxlZCBGSElSSGVscGVycw0KDQpjb2Rlc3lzdGVtICJTTk9NRUQiOiAnaHR0cDovL3Nub21lZC5pbmZvL3NjdCcJICAvLyB0ZXJtaW5vbG9neS9jb2Rlc3lzdGVtIA0KY29kZSAiT3RpdGlzIG1lZGlhIjogJzY1MzYzMDAyJyBmcm9tICJTTk9NRUQiIGRpc3BsYXkgJ090aXRpcyBtZWRpYScNCnBhcmFtZXRlciAiTWVhc3VyZW1lbnQgUGVyaW9kIiBkZWZhdWx0IEludGVydmFsW0AyMDE3LTAxLTAxLCBAMjAxNy0xMi0zMSkNCg0KY29udGV4dCBQYXRpZW50DQogIA0KZGVmaW5lICJpc0luZmFudCI6DQoJQWdlSW5ZZWFycygpIDw9IDEuMjUgICAvLyBBZ2VJblllYXJzQXQoc3RhcnQgb2YgIk1lYXN1cmVtZW50IFBlcmlvZCIpIDw9IDEuMjUgDQogICAgICANCmRlZmluZSAiaGFzT3RpdGlzTWVkaWEiOg0KCWV4aXN0cyhbQ29uZGl0aW9uXUMNCiAgICAgICAgICAgICB3aXRoIFtFbmNvdW50ZXJdIEUNCiAgICAgICAgICAgICAgICAgc3VjaCB0aGF0IEMuY29kZSB+ICJPdGl0aXMgbWVkaWEiDQogICAgICAgIAkgICAgICAgICBhbmQgRS5wZXJpb2QgZHVyaW5nICJNZWFzdXJlbWVudCBQZXJpb2QiKSANCiAgICAgICAgICAgICAgIA0KZGVmaW5lICJpbmZhbnRXaXRoUmVjb3JkT3RpdGlzTWVkaWEiOg0KICAgICAgICBpc0luZmFudCBhbmQgaGFzT3RpdGlzTWVkaWEgIC8vIGlmIHBhdGllbnQgaXMgYW4gaW5mYW50IHdpdGggYSByZWNvcmQgb2YgT3RpdGlzIG1lZGlhDQoNCiAgICAgICAgICAgICAgIA=="' +
    '\t\t\t\t\n' +
    '\t\t\t}\n' +
    '\t\t]\n' +
    '}';


  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
  }


  toggleClass($event: MouseEvent, panel: string): void {
    this.selectedPanel = panel;
    const arrNav = this.elRef.nativeElement.querySelectorAll('.nav-link');
    arrNav.forEach( (x) => {
      x.classList.remove('active');
    });
    if ( panel === '#libraryList' ){
      this.elRef.nativeElement.querySelectorAll('#libraryListTab').forEach((el) => {
        el.classList.add('active');
      });
    }else if ( panel === '#libraryAddUpdate'  ) {
      this.elRef.nativeElement.querySelectorAll('#libraryAddUpdateTab').forEach((el) => {
        el.classList.add('active');
      });
    }else{
      this.elRef.nativeElement.querySelectorAll('#libraryRunTab').forEach((el) => {
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
  }

  edit(resource: any): void {
    this.currentLibrary = JSON.stringify(resource);
    this.currentLibraryURL = resource.fullUrl;
    this.toggleClass(undefined, '#libraryAddUpdate');
  }


  run(resource: any): void {
    this.currentLibrary = JSON.stringify(resource);
    this.currentLibraryURL = resource.fullUrl;
    this.toggleClass(undefined, '#libraryRun');
  }
}
