import { AfterViewInit, Component, EventEmitter, Input, input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { DatatablesTwoService } from './services/datatables-two.service';
import { LoadingService } from '../loading/loading.service';
import { FeatherModule } from 'angular-feather';
import { FormsModule } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { Config } from 'datatables.net';
import feather from 'feather-icons';
 
@Component({
  selector: 'app-datatables',
  standalone: true,
  imports: [
    DataTablesModule,
    FeatherModule,
    FormsModule,
  ],
  templateUrl: './datatables.component.html',
  styleUrl: './datatables.component.css'
})
export class DatatablesComponent implements OnInit, OnDestroy, AfterViewInit {
 
  private readonly subscriptions: Subscription[] = [];
 
  titlesList = input.required<string[]>();
  @Input() dtOptions : Config = {};
  @Input() fistThSellectAll: boolean = false;
  @Input() isCheckbox: boolean = false;
  @Input() switchId: string = '';

  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  isSelected = false;
 
  @Output() selectAllEmitter = new EventEmitter<boolean>();

  constructor(
    private readonly datatablesService: DatatablesTwoService,
    private readonly loadingService: LoadingService,
  ) {}
 
  ngOnInit(): void {
    this.buildAjaxDatatable();
  }
 
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dtTrigger.next(null);
      feather.replace();
    }, 200);


    //Para seleccionar todos los checkboxes Start
     const selectAllCheckbox = document.getElementById('selectAllCheckbox') as HTMLInputElement;

    if (selectAllCheckbox) {
      selectAllCheckbox.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.row-checkbox');
        checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
      });
    }
    //Para seleccionar todo los checkboxes End

  }
 
  selectAll(){
    this.isSelected = true;
    const input = document.getElementById(`custom-switch-${this.switchId}`) as HTMLInputElement;
    input.click();
    this.selectAllEmitter.emit(this.isSelected);
  }

  private buildAjaxDatatable(): void {
    this.dtOptions = this.datatablesService.buildOptions(this.dtOptions);
  }
 
  reloadTable() {
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.ajax.reload(()=> {}, false);
    });
  }
  reloadTableFilters() {
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.ajax.reload();
    });
  }
 
  onChangeFilter(selectedOptions: string[]) {
    this.reloadTableFilters();
  }

  onClickSwitch(){    
    this.isSelected = !this.isSelected
    this.selectAllEmitter.emit(this.isSelected);
  }
 
  public showLoading() {
    this.loadingService.show();
  }
 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
 
 