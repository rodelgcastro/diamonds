import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
    public sidenav: any;
    public header: string;

    constructor() {
    }

    public close() {
        this.sidenav.close();
    }

    public open() {
        this.sidenav.open();
    }

    public toggle() {
        this.sidenav.toggle();
    }

}
