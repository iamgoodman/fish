import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Comp1MainComponent} from "./comp1-main.component";
import {Comp1SubComponent} from "./comp2-sub.component";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    template: `


<!DOCTYPE html>
<html>
    <head>
        <title>Images</title>
        <style type="text/css">
            body {
                color: #665544;
                background-color: #d4d0c6;
                background-image: url("images/backdrop.gif");
                font-family: Georgia, "Times New Roman", serif;
                text-align: center;}
            .wrapper {
                width: 720px;
                margin: 0px auto;}
            .header {
                margin: 40px 0px 20px 0px;}
            .entry {
                width: 220px;
                float: left;
                margin: 10px;
                height: 198px;
                background-image: url("images/shadow.png");
                background-repeat: no-repeat;
                background-position: bottom;}
            figure {
                display: block;
                width: 202px;
                height: 170px;
                background-color: #e7e3d8;
                margin: 0;
                padding: 9px;
                text-align: left;}
            figure img {
                width: 200px;
                height: 150px;
                border: 1px solid #d6d6d6;}
            figcaption {
                background-image: url("images/icon.png");
                padding-left: 20px;
                background-repeat: no-repeat;}
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="header">
                <img src="images/title.gif" alt="Galerie Botanique" width="456" height="122" />
                <p>Here is a selection of antique botanical prints held in our collection.</p>
            </div>
            <div class="entry">
                <figure><img src="" alt="Salmon" />
                    <figcaption>Salmon</figcaption>
                </figure>
            </div>
            <div class="entry">
                <figure><img src="" alt="Cod" />
                    <figcaption>Cod/figcaption>
                </figure>
            </div>
            <div class="entry">
                <figure><img src="images/print-03.jpg" alt="FatFish" />
                    <figcaption>Fatfish</figcaption>
                </figure>
            </div>
            <div class="entry">
                <figure><img src="images/print-04.jpg" alt="Skinny Fish" />
                    <figcaption>Skinny Fish</figcaption>
                </figure>
            </div>
            <div class="entry">
                <figure><img src="images/print-05.jpg" alt="SmallFish" />
                    <figcaption>SmallFish</figcaption>
                </figure>
            </div>
            <div class="entry">
                <figure><img src="images/print-06.jpg" alt="Huge Fish" />
                    <figcaption>Huge Fish/figcaption>
                </figure>
            </div>
        </div>
    </body>
</html>





        This is Component 1
        <div>
            Source was {{source}}
        </div>
        <div>
            Optional: {{optional}}
        </div>
        <div><a [routerLink]="['Component1Main']">Main</a></div>
        <div><a [routerLink]="['Component1Sub']">Sub</a></div>
        <router-outlet></router-outlet>






    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
    {path: '/subroute', name: 'Component1Sub', component: Comp1SubComponent},
])
export class Component1Component implements OnInit {
    source: string;
    optional: string;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit():any {
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}