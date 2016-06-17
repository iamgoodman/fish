System.register(['angular2/core', "angular2/router", "./component1.component", "./component2.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, component1_component_1, router_2, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n\n<div class=\"wrapper\">\n      <header>\n        <h1>SeaFoodAlliance</h1>\n        <nav>\n          <ul>\n            <li><a href=\"\" class=\"current\">\u9996\u9875</a></li>\n            <li><a [routerLink]=\"['Component1', {source: 'AppComponent', optional: 'This is optional'}]\">Component1</a></li>\n            <li><a href=\"\">catering</a></li>\n            <li><a href=\"\">\u5173\u4E8E\u6211\u4EEC</a></li>\n            <li><a href=\"\">\u8054\u7CFB\u6211\u4EEC</a></li>\n          </ul>\n        </nav>\n\n      </header>\n      <section class=\"courses\">\n        <article>\n          <figure>\n            <img src=\"images/bok-choi.jpg\" alt=\"\u6740\u9A6C\u7279\u9C7C\" />\n            <figcaption>\u6740\u9A6C\u7279\u9C7C</figcaption>\n          </figure>\n          <hgroup>\n            <h2>\u5B58\u653E\u4E00\u4E9B\u4FE1\u606F</h2>\n            <h3>\u968F\u4FBF\u4EC0\u4E48</h3>\n          </hgroup>\n          <p>\u5403\u9C7C\u5BF9\u8EAB\u4F53\u7279\u522B\u597D\uFF0C\u4EE5\u524D\u5927\u529B\u6C34\u624B\u7231\u5403\u83E0\u83DC\uFF0C\u73B0\u5728\u8D85\u4EBA\u90FD\u7231\u5403\u9C7C</p>\n        </article>    \n        <article>\n          <figure>\n            <img src=\"images/teriyaki.jpg\" alt=\"\u6D17\u526A\u5439\u9C7C\" />\n            <figcaption>\u6D17\u526A\u5439\u9C7C</figcaption>\n          </figure>\n          <hgroup>\n            <h2>\u5B58\u653E\u4E00\u4E9B\u4FE1\u606F2</h2>\n            <h3>s\u968F\u4FBF\u5B58\u653E\u4E00\u4E9B\u4FE1\u606F\u90FD\u884C3</h3>\n          </hgroup>\n          <p>\u8D85\u4EBA\u7684\u9C7C\u8981\u600E\u4E48\u5403\u5462\uFF0C \u8981\u5148\u4E70\u624D\u884C</p>\n        </article>    \n      </section>\n      <aside>\n        <section class=\"popular-recipes\">\n          <h2>\u505A\u9C7C\u7684\u914D\u65B9</h2>\n          <a href=\"\">\u6C99\u62C9\u9C7C</a>\n          <a href=\"\">\u70E7\u70E4\u9C7C</a>\n          <a href=\"\">\u751F\u9C7C</a>\n          <a href=\"\">\u706B\u9505\u9C7C</a>\n        </section>\n        <section class=\"contact-details\">\n          <h2>\u8054\u7CFB\u6211</h2>\n          <p>Joey hen shuai<br />\n            JOey chao shuai street<br />\n            henshuai <br />\n            diqiu E2 7DP</p>\n        </section>\n      </aside>\n      <footer>\n        &copy; 2016joey\n      </footer>\n    </div><!-- .wrapper -->\n\n \n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/component-1/:source/...', name: 'Component1', component: component1_component_1.Component1Component },
                        { path: '/component-2', name: 'Component2', component: component2_component_1.Component2Component }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0ZBO2dCQUFBO2dCQUVBLENBQUM7Z0JBNUVEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBR2xCLFFBQVEsRUFBRSwweUVBK0RUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7d0JBQ3RGLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztxQkFDN0UsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tcG9uZW50MUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50MS5jb21wb25lbnRcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tcG9uZW50MkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50Mi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuIFxuICBcbiAgICB0ZW1wbGF0ZTogYFxuXG5cbjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDE+U2VhRm9vZEFsbGlhbmNlPC9oMT5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiIGNsYXNzPVwiY3VycmVudFwiPummlumhtTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29tcG9uZW50MScsIHtzb3VyY2U6ICdBcHBDb21wb25lbnQnLCBvcHRpb25hbDogJ1RoaXMgaXMgb3B0aW9uYWwnfV1cIj5Db21wb25lbnQxPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPmNhdGVyaW5nPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuWFs+S6juaIkeS7rDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7ogZTns7vmiJHku6w8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImNvdXJzZXNcIj5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Jvay1jaG9pLmpwZ1wiIGFsdD1cIuadgOmprOeJuemxvFwiIC8+XG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj7mnYDpqaznibnpsbw8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPGhncm91cD5cbiAgICAgICAgICAgIDxoMj7lrZjmlL7kuIDkupvkv6Hmga88L2gyPlxuICAgICAgICAgICAgPGgzPumaj+S+v+S7gOS5iDwvaDM+XG4gICAgICAgICAgPC9oZ3JvdXA+XG4gICAgICAgICAgPHA+5ZCD6bG85a+56Lqr5L2T54m55Yir5aW977yM5Lul5YmN5aSn5Yqb5rC05omL54ix5ZCD6I+g6I+c77yM546w5Zyo6LaF5Lq66YO954ix5ZCD6bG8PC9wPlxuICAgICAgICA8L2FydGljbGU+ICAgIFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGVyaXlha2kuanBnXCIgYWx0PVwi5rSX5Ymq5ZC56bG8XCIgLz5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPua0l+WJquWQuemxvDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8aGdyb3VwPlxuICAgICAgICAgICAgPGgyPuWtmOaUvuS4gOS6m+S/oeaBrzI8L2gyPlxuICAgICAgICAgICAgPGgzPnPpmo/kvr/lrZjmlL7kuIDkupvkv6Hmga/pg73ooYwzPC9oMz5cbiAgICAgICAgICA8L2hncm91cD5cbiAgICAgICAgICA8cD7otoXkurrnmoTpsbzopoHmgI7kuYjlkIPlkaLvvIwg6KaB5YWI5Lmw5omN6KGMPC9wPlxuICAgICAgICA8L2FydGljbGU+ICAgIFxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGFzaWRlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBvcHVsYXItcmVjaXBlc1wiPlxuICAgICAgICAgIDxoMj7lgZrpsbznmoTphY3mlrk8L2gyPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj7mspnmi4npsbw8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiPueDp+eDpOmxvDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+55Sf6bG8PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj7ngavplIXpsbw8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250YWN0LWRldGFpbHNcIj5cbiAgICAgICAgICA8aDI+6IGU57O75oiRPC9oMj5cbiAgICAgICAgICA8cD5Kb2V5IGhlbiBzaHVhaTxiciAvPlxuICAgICAgICAgICAgSk9leSBjaGFvIHNodWFpIHN0cmVldDxiciAvPlxuICAgICAgICAgICAgaGVuc2h1YWkgPGJyIC8+XG4gICAgICAgICAgICBkaXFpdSBFMiA3RFA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICAmY29weTsgMjAxNmpvZXlcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PjwhLS0gLndyYXBwZXIgLS0+XG5cbiBcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL2NvbXBvbmVudC0xLzpzb3VyY2UvLi4uJywgbmFtZTogJ0NvbXBvbmVudDEnLCBjb21wb25lbnQ6IENvbXBvbmVudDFDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2NvbXBvbmVudC0yJywgbmFtZTogJ0NvbXBvbmVudDInLCBjb21wb25lbnQ6IENvbXBvbmVudDJDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
