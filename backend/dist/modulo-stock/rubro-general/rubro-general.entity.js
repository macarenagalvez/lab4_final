"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubroGeneral = void 0;
const base_1 = require("../../base/entities/base");
const typeorm_1 = require("typeorm");
const articulo_manufacturado_entity_1 = require("../articulo-manufacturado/articulo-manufacturado.entity");
let RubroGeneral = class RubroGeneral extends base_1.Base {
};
__decorate([
    typeorm_1.Column({ length: 50, type: 'varchar' }),
    __metadata("design:type", String)
], RubroGeneral.prototype, "denominacion", void 0);
__decorate([
    typeorm_1.OneToMany((type) => articulo_manufacturado_entity_1.ArticuloManufacturado, (manufacturados) => manufacturados.rubro),
    __metadata("design:type", Array)
], RubroGeneral.prototype, "manufacturados", void 0);
RubroGeneral = __decorate([
    typeorm_1.Entity('RubroGeneral')
], RubroGeneral);
exports.RubroGeneral = RubroGeneral;
//# sourceMappingURL=rubro-general.entity.js.map