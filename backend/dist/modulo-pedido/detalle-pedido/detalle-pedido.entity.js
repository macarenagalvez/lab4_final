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
exports.DetallePedido = void 0;
const base_1 = require("../../base/entities/base");
const articulo_insumo_entity_1 = require("../../modulo-stock/articulo-insumo/articulo-insumo.entity");
const articulo_manufacturado_entity_1 = require("../../modulo-stock/articulo-manufacturado/articulo-manufacturado.entity");
const rubro_articulo_entity_1 = require("../../modulo-stock/rubro-articulo/rubro-articulo.entity");
const typeorm_1 = require("typeorm");
const factura_entity_1 = require("../factura/factura.entity");
const pedido_entity_1 = require("../pedido/pedido.entity");
let DetallePedido = class DetallePedido extends base_1.Base {
};
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "cantidad", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "precio_subtotal", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => pedido_entity_1.Pedido, (pedido) => pedido.detalles_pedido, {
        cascade: ['update', 'insert'],
    }),
    typeorm_1.JoinColumn({ name: 'pedido_id' }),
    __metadata("design:type", pedido_entity_1.Pedido)
], DetallePedido.prototype, "pedido", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => factura_entity_1.Factura, (factura) => factura.detalles_pedido, {
        cascade: ['update', 'insert'],
    }),
    typeorm_1.JoinColumn({ name: 'factura_id' }),
    __metadata("design:type", factura_entity_1.Factura)
], DetallePedido.prototype, "factura", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => articulo_insumo_entity_1.ArticuloInsumo, (insumo) => insumo.detalles_pedido, {
        eager: true,
    }),
    typeorm_1.JoinColumn({ name: 'insumo_id' }),
    __metadata("design:type", articulo_insumo_entity_1.ArticuloInsumo)
], DetallePedido.prototype, "insumo", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => articulo_manufacturado_entity_1.ArticuloManufacturado, (manufacturado) => manufacturado.detalles_pedido),
    typeorm_1.JoinColumn({ name: 'manufacturado_id' }),
    __metadata("design:type", articulo_manufacturado_entity_1.ArticuloManufacturado)
], DetallePedido.prototype, "manufacturado", void 0);
DetallePedido = __decorate([
    typeorm_1.Entity('DetallePedido')
], DetallePedido);
exports.DetallePedido = DetallePedido;
//# sourceMappingURL=detalle-pedido.entity.js.map