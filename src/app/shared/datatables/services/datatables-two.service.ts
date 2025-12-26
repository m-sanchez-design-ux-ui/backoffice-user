import { Config } from 'datatables.net';
import { PageParams } from '../../models/pageparams.model';
import { SortParams } from '../../models/sortparams.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatatablesTwoService {
  private pageParams!: PageParams;
  private sortParams!: SortParams;
  private search!: string;

  constructor(private http: HttpClient) {}

  getData<Type>(url: string, params: any, httpParams: HttpParams): Observable<Type> {
    this.pageParams = this.buildPageParams(params);
    this.sortParams = this.buildSortParams(params);
    this.search = params.search.value;

    if (this.pageParams) {
      httpParams = httpParams.set('pageParams.PageNumber', this.pageParams.page);
      httpParams = httpParams.set(
        'pageParams.pageSize',
        this.pageParams.pageSize
      );
    }

    if (this.sortParams) {
      let sortByValue: string = this.sortParams.sortBy!.toString().trim();
      let defaultSortByValue = params.columns[0].data.trim();
      httpParams = httpParams.set(
        'sortParams.sortBy',
        sortByValue === '' ? defaultSortByValue : sortByValue
      );
      httpParams = httpParams.set(
        'sortParams.ascending',
        this.sortParams.ascending!
      );
    }

    if (this.search) httpParams = httpParams.set('search', this.search);

    return this.http.get<Type>(`${url}`, {
      params: httpParams,
    });
  }

  buildOptions(settings: Config): Config {
    return Object.assign(
      {
        serverSide: false, //set to true when data is obtained from an API
        processing: true,

        dom: "<'datatable__header'f>" +
        "<'datatable__body overflow-x-auto'<'table't>>" +
        "<'datatable__footer'<li>p>",

        paging: true,
        responsive: true,
        pagingType: 'simple_numbers',
        pageLength: 6,
        info: true,
        searching: false,
        ordering: true,
        lengthChange: true,
        searchDelay: 800,
        lengthMenu: [6, 12, 24, 48],
        language: {
          searchPlaceholder: 'Buscar...',
          search: '',
          info: '_START_ - _END_ / _TOTAL_',
          infoEmpty: 'No hay registros',
          lengthMenu: '_MENU_',
          emptyTable:
            '<div class="flex flex-col justify-center items-center gap-4"><img src="images/datatable/noResults.svg" alt="No results" class="h-80 w-auto"><h4 class="text-base text-gray-900 font-medium text-center">No se han encontrado resultados</h4><p class="text-sm text-gray-700 text-center font-normal">Limpie los filtros e intente nuevamente.</p></div>',
          zeroRecords:
            '<div class="flex flex-col justify-center items-center gap-4"><img src="images/datatable/noRecords.svg" alt="No results" class="h-80 w-auto"><h4 class="text-base text-gray-900 font-medium text-center">En este momento no hay registros.</h4></div>',
          paginate: {
            first: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>',
            previous:
              '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>', // points to a custom font
            next: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>', // points to a custom font
          },
          loadingRecords:
            '<div class="spinner-border spinner-border-sm text-white mr--2" role="status"><span class="sr-only">Loading...</span></div>',
          processing:
            'Procesando...',
        },
      },
      settings,
      {
        initComplete: (initSettings: any, json: any) => {
          if (settings.initComplete) {
            settings.initComplete(initSettings, json);
          }
        },
        drawCallback: (drawSettings: any) => {
          if (settings.drawCallback) {
            settings.drawCallback(drawSettings);
          }
        },
      }
    );
  }

  buildPageParams(params: any): PageParams {
    return { page: params.start / params.length + 1, pageSize: params.length };
  }

  buildSortParams(params: any): SortParams {
    const sortParams: SortParams = {
      ascending: false,
      sortBy: '',
    };
    for (const element of params.order) {
      const order = element;
      sortParams.ascending = order.dir == 'asc' ? true : false;
      sortParams.sortBy = order.name ? order.name : false;
    }
    return sortParams;
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
