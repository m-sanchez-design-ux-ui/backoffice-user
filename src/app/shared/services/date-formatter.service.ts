import { Injectable } from '@angular/core';
import { CustomDateStruct } from '../datepicker/interfaces/CustomDateFormat.model';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  public formatDateCustomDateStruct(date: CustomDateStruct) {
    const day = date.day <= 9 ? '0' + date.day : date.day;
    const month = date.month <= 9 ? '0' + date.month : date.month;
    const year = date.year;
    const hour = '00:00:00';
    const formattedDate = year + '-' + month + '-' + day + ' ' + hour;
    return formattedDate;
  }
}
