"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubroArticuloModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rubro_articulo_controller_1 = require("./rubro-articulo.controller");
const rubro_articulo_repository_1 = require("./rubro-articulo.repository");
const rubro_articulo_service_1 = require("./rubro-articulo.service");
let RubroArticuloModule = class RubroArticuloModule {
};
RubroArticuloModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([rubro_articulo_repository_1.RubroArticuloRepository])],
        providers: [rubro_articulo_service_1.RubroArticuloService],
        controllers: [rubro_articulo_controller_1.RubroArticuloController],
    })
], RubroArticuloModule);
exports.RubroArticuloModule = RubroArticuloModule;
//# sourceMappingURL=rubro-articulo.module.js.map