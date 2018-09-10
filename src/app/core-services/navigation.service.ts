import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

    public sidenav: any;
    public isOpen: boolean;
    public header: string;

    constructor() {
    }

    public toggle() {
        this.sidenav.toggle();
        this.isOpen = this.sidenav.opened;
    }

}
