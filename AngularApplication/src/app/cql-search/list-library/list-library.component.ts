import {Component, Input, OnInit} from '@angular/core';
import {LibraryService} from '../../services/library-services/library.service';
import {CqlSearchComponent} from '../cql-search.component';

@Component({
  selector: 'app-list-library',
  templateUrl: './list-library.component.html',
  styleUrls: ['./list-library.component.css']
})
export class ListLibraryComponent implements OnInit {
  libraryList: [];
  searchTerm = '';
  @Input() parentComponent: CqlSearchComponent;


  constructor(private libraryService: LibraryService) {
    this.listLibraries();
  }

  ngOnInit(): void {
  }

  listLibraries(): void {
    const ApiCall = this.libraryService.listLibraries(this.searchTerm);
    const that = this;
    ApiCall.subscribe(res => {
      that.libraryList = res.entry;
    });
  }

  edit(resource: any): void {
    this.parentComponent.edit(resource);
  }

  delete(resourceUrl: any): void {
    const ApiCall = this.libraryService.deleteLibrary(resourceUrl);
    const that = this;
    ApiCall.subscribe(res => {
      that.listLibraries();
    });
  }

  run(library: never): void {
    this.parentComponent.run(library);
  }
}
