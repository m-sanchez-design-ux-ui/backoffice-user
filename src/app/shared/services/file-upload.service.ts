import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  public upload(formData: FormData, fileType: string) {
    const headers = new HttpHeaders();

    if (!fileType.match('image/')) {
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    } else {
      headers.append('Content-Type', fileType);
    }

    const httpOptions = { headers };

    return this.httpClient.post(
      `${this.configService.getProperty('apiUrl')}/tax-documents`,
      formData,
      httpOptions
    );
  }
}
