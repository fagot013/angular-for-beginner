import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBox} from "./search-box/search-box.component";
import {ColorPreviewer} from "../extended-component-example/color-previewer/color-previewer";

@Component({
    selector: 'app',
    template: `<search-box [placeholder]="'Custom Placeholder'"></search-box>`
})
export class App {

}

@NgModule({
    declarations: [App, SearchBox, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
