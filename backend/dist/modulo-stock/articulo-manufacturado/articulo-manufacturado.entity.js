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
exports.ArticuloManufacturado = void 0;
const base_1 = require("../../base/entities/base");
const detalle_pedido_entity_1 = require("../../modulo-pedido/detalle-pedido/detalle-pedido.entity");
const typeorm_1 = require("typeorm");
const articulo_manufacturado_detalle_entity_1 = require("../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity");
const rubro_general_entity_1 = require("../rubro-general/rubro-general.entity");
let ArticuloManufacturado = class ArticuloManufacturado extends base_1.Base {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ArticuloManufacturado.prototype, "denominacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], ArticuloManufacturado.prototype, "tiempo_estimado_cocina", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], ArticuloManufacturado.prototype, "precio_venta", void 0);
__decorate([
    typeorm_1.OneToMany((type) => detalle_pedido_entity_1.DetallePedido, (detalle_catalogo) => detalle_catalogo.manufacturado),
    __metadata("design:type", Array)
], ArticuloManufacturado.prototype, "detalles_pedido", void 0);
__decorate([
    typeorm_1.OneToMany((type) => articulo_manufacturado_detalle_entity_1.ArticuloManufacturadoDetalle, (detalle_manufacturado) => detalle_manufacturado.manufacturado, { eager: true, cascade: ['insert'] }),
    __metadata("design:type", Array)
], ArticuloManufacturado.prototype, "detalles_manufacturado", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => rubro_general_entity_1.RubroGeneral, (catagoria) => catagoria.manufacturados),
    typeorm_1.JoinColumn({ name: 'rubro_id' }),
    __metadata("design:type", rubro_general_entity_1.RubroGeneral)
], ArticuloManufacturado.prototype, "rubro", void 0);
ArticuloManufacturado = __decorate([
    typeorm_1.Entity('ArticuloManufacturado')
], ArticuloManufacturado);
exports.ArticuloManufacturado = ArticuloManufacturado;
//# sourceMappingURL=articulo-manufacturado.entity.js.map