import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {ColorSampleComponent} from "./color-sample/color-sample";


@Component({
    selector:'app',
    template:`
        <color-sample #colorsample></color-sample>
        <br/>
        <input placeholder="Type your color here" (keyup)="colorsample.color=$event.target.value"/>
    `
})
export class App{

}

@NgModule({
    declarations: [App, ColorSampleComponent],
    imports: [BrowserModule],
    bootstrap:[App]
})
export class AppModule{


}

platformBrowserDynamic().bootstrapModule(AppModule);