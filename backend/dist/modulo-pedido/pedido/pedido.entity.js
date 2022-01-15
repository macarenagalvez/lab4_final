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
exports.Pedido = void 0;
const base_1 = require("../../base/entities/base");
const cliente_entity_1 = require("../../modulo-acceso/cliente/cliente.entity");
const typeorm_1 = require("typeorm");
const detalle_pedido_entity_1 = require("../detalle-pedido/detalle-pedido.entity");
const factura_entity_1 = require("../factura/factura.entity");
let Pedido = class Pedido extends base_1.Base {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Pedido.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Pedido.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Pedido.prototype, "tipo_envio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Pedido.prototype, "estado", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Date)
], Pedido.prototype, "hora_estimada", void 0);
__decorate([
    typeorm_1.OneToMany((type) => detalle_pedido_entity_1.DetallePedido, (DetallePedido) => DetallePedido.pedido, {
        cascade: ['update', 'insert'],
    }),
    __metadata("design:type", Array)
], Pedido.prototype, "detalles_pedido", void 0);
__decorate([
    typeorm_1.OneToOne((type) => factura_entity_1.Factura, (Factura) => Factura.pedido, {
        eager: true,
        cascade: ['insert'],
    }),
    __metadata("design:type", factura_entity_1.Factura)
], Pedido.prototype, "factura", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => cliente_entity_1.Cliente, (Cliente) => Cliente.pedidos),
    typeorm_1.JoinColumn({ name: 'cliente_id' }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Pedido.prototype, "cliente", void 0);
Pedido = __decorate([
    typeorm_1.Entity('Pedido')
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.entity.js.map