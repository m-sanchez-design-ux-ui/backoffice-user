import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private config: any;
    private loaded = false;
    public defaultTheme = true;
    public user: any;
    public theme: string = "light";

    constructor(private readonly http: HttpClient) { }

    load(): Promise<any> {
        // PLEASE SEE:
        // https://github.com/natchiketa/angular-cli-envvars/issues/1
        // https://embed.plnkr.co/295SxTOZEZUbiyrhAKh2/
        // https://github.com/angular/angular/issues/9047
        let rt: Promise<any>;
        if (!this.loaded) {
            const promise = new Promise<HttpResponse<any>>(resolve => {
                this.http.get('appsettings.json', { observe: 'response', responseType: 'json' })
                    .subscribe(response => {
                        this.config = response.body;
                        this.loaded = true;
                        resolve(this.config);
                    })
            });
            rt = promise;
            return rt;
        }
        return rt!;
    }

    public getProperty(property: string): any {
        return this.config[property];
    }

    public changeTheme(theme: string) {
        if (theme === 'light') {
            console.log("hola light")
            this.theme = theme;
            localStorage.setItem(this.user, 'light');
        } else if (theme === 'dark_blue') {
            this.theme = theme;
            localStorage.setItem(this.user, 'dark_blue');
        } else if (theme === 'dark') {
            console.log("hola dark")
            this.theme = theme;
            localStorage.setItem(this.user, 'dark');
        } else if (theme === 'glass_gradient') {
            this.theme = theme;
            localStorage.setItem(this.user, 'glass_gradient');
        }
    }

    public setUser(user: any) {
        this.user = user;
        if (localStorage.getItem(user)) {
            this.defaultTheme = localStorage.getItem(user) === 'light';
        }
    }

    public getTheme() {
        let theme = localStorage.getItem(this.user);
        if (theme == null) {
            theme = "light";
        }
        return theme;
    }

    public getLocale(): string {
      const language = navigator.language || 'en-US'; // Usa 'en-US' por defecto si no existe el language
      return language.startsWith('es') ? 'es-AR' : 'en-US'; // Usa 'es-AR' si el idioma empieza con 'es'
    }

}
