import {Component, Input, OnInit} from '@angular/core';
import {CqlSearchComponent} from '../cql-search.component';
import {LibraryService} from '../../services/library-services/library.service';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {
  @Input() parentComponent: CqlSearchComponent;
  @Input() libraryAsText: string;
  @Input() libraryURL: string;
  that = this;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  addLibrary(): void {
    const obj = JSON.parse(this.libraryAsText);
    // find and replace BETWEEN START and END by base 64 string;

    const APICall = this.libraryService.addLibrary(obj);
    const that = this;
    APICall.subscribe(res => {
      that.parentComponent.edit(res);
    });
  }

  updateLibrary(): void {
    const obj = JSON.parse(this.libraryAsText);
    const APICall = this.libraryService.updateLibrary(obj, this.libraryURL);
    const that = this;
    APICall.subscribe(res => {
      that.cancelAddLibrary();
    });
  }

  cancelAddLibrary(): void {
    this.parentComponent.currentLibraryURL = undefined;
    this.parentComponent.currentLibrary = '{\n' +
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
  }
}
