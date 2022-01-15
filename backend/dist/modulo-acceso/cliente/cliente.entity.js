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
exports.Cliente = void 0;
const base_1 = require("../../base/entities/base");
const pedido_entity_1 = require("../../modulo-pedido/pedido/pedido.entity");
const typeorm_1 = require("typeorm");
const domicilio_entity_1 = require("../domicilio/domicilio.entity");
let Cliente = class Cliente extends base_1.Base {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cliente.prototype, "apellido", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Cliente.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToOne((type) => domicilio_entity_1.Domicilio, (domicilio) => domicilio.cliente, {
        eager: true,
        cascade: ['insert'],
    }),
    __metadata("design:type", domicilio_entity_1.Domicilio)
], Cliente.prototype, "domicilio", void 0);
__decorate([
    typeorm_1.OneToMany((type) => pedido_entity_1.Pedido, (pedido) => pedido.cliente, { eager: true }),
    __metadata("design:type", Array)
], Cliente.prototype, "pedidos", void 0);
Cliente = __decorate([
    typeorm_1.Entity('Cliente')
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map