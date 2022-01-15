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
exports.Factura = void 0;
const base_1 = require("../../base/entities/base");
const typeorm_1 = require("typeorm");
const detalle_pedido_entity_1 = require("../detalle-pedido/detalle-pedido.entity");
const pedido_entity_1 = require("../pedido/pedido.entity");
let Factura = class Factura extends base_1.Base {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Factura.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Factura.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], Factura.prototype, "monto_descuento", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], Factura.prototype, "subtotal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Factura.prototype, "forma_pago", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Factura.prototype, "nro_tarjeta", void 0);
__decorate([
    typeorm_1.OneToOne((type) => pedido_entity_1.Pedido, (pedido) => pedido.factura),
    typeorm_1.JoinColumn({ name: 'pedido_id' }),
    __metadata("design:type", pedido_entity_1.Pedido)
], Factura.prototype, "pedido", void 0);
__decorate([
    typeorm_1.OneToMany((type) => detalle_pedido_entity_1.DetallePedido, (detalles_pedido) => detalles_pedido.factura, {
        cascade: ['update', 'insert'],
    }),
    __metadata("design:type", Array)
], Factura.prototype, "detalles_pedido", void 0);
Factura = __decorate([
    typeorm_1.Entity('Factura')
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.entity.js.map