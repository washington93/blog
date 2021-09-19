import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.setUpAnalytics();
    }

    setUpAnalytics() {

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                gtag('config', 'G-MPNDWGS0BZ',
                    {
                        page_path: event.urlAfterRedirects
                    }
                );
            });
    }
}
