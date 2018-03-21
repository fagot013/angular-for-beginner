import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBox} from "./search-box.component";

@Component({
    selector: 'app',
    template: `<search-box [placeholder]="'Custom Placeholder'"></search-box>`
})
export class App {

}

@NgModule({
    declarations: [App, SearchBox],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
