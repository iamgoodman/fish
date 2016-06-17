System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_router) {
                    this._router = _router;
                }
                Component2Component.prototype.onNavigate = function () {
                    this._router.navigate(['Component1', { source: 'Component 2' }]);
                };
                Component2Component.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    return alert("Sure?");
                };
                Component2Component = __decorate([
                    core_1.Component({
                        template: "\n        <h2>This is component 2</h2>\n        <button (click)=\"onNavigate()\">Take me to Component 1</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0ksNkJBQW9CLE9BQWM7b0JBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztnQkFDbEMsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCxpREFBbUIsR0FBbkIsVUFBb0IsZUFBb0MsRUFBRSxlQUFvQztvQkFDMUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFoQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0hBR1Q7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBWUYsMEJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHFEQVdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0NhbkRlYWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPlRoaXMgaXMgY29tcG9uZW50IDI8L2gyPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbk5hdmlnYXRlKClcIj5UYWtlIG1lIHRvIENvbXBvbmVudCAxPC9idXR0b24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xuICAgIH1cblxuICAgIG9uTmF2aWdhdGUoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbXBvbmVudDEnLCB7c291cmNlOiAnQ29tcG9uZW50IDInfV0pO1xuICAgIH1cblxuICAgIHJvdXRlckNhbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOkNvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246Q29tcG9uZW50SW5zdHJ1Y3Rpb24pOmFueSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIlN1cmU/XCIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
