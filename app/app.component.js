System.register(['angular2/core', './hero-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t      <h1>{{title}}</h1>\n\t      <h2>My Heroes</h2>\n\t      <ul class=\"heroes\">\n\t      \t  <li *ngFor=\"#hero of heroes\" \n\t\t      [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n\t\t      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t  </li>\n\t      </ul>\n\t      <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\t      ",
                        styles: ["\n\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n     \t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n    \t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n    \t.heroes .badge {\n    \t  font-size: small;\n    \t   color: white;\n   \t   padding: 0.1em 0.7em;\n      \t   background-color: #369;\n      \t   line-height: 1em;\n      \t   position: relative;\n      \t   left: -1px;\n      \t   top: -1px;\n       }\n       .selected { background-color: #EEE; color: #369; }\n     "],
                        directives: [hero_detail_component_1.HeroDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map