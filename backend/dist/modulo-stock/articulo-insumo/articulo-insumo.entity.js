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
exports.ArticuloInsumo = void 0;
const base_1 = require("../../base/entities/base");
const detalle_pedido_entity_1 = require("../../modulo-pedido/detalle-pedido/detalle-pedido.entity");
const typeorm_1 = require("typeorm");
const articulo_manufacturado_detalle_entity_1 = require("../articulo-manufacturado-detalle/articulo-manufacturado-detalle.entity");
const rubro_articulo_entity_1 = require("../rubro-articulo/rubro-articulo.entity");
let ArticuloInsumo = class ArticuloInsumo extends base_1.Base {
};
__decorate([
    typeorm_1.Column({ length: 50, type: 'varchar' }),
    __metadata("design:type", String)
], ArticuloInsumo.prototype, "denominacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], ArticuloInsumo.prototype, "precio_compra", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], ArticuloInsumo.prototype, "precio_venta", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], ArticuloInsumo.prototype, "stock_minimo", void 0);
__decorate([
    typeorm_1.Column({ type: 'double' }),
    __metadata("design:type", Number)
], ArticuloInsumo.prototype, "stock_actual", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticuloInsumo.prototype, "unidad_medida", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], ArticuloInsumo.prototype, "es_insumo", void 0);
__decorate([
    typeorm_1.OneToMany((type) => detalle_pedido_entity_1.DetallePedido, (detalle_catalogo) => detalle_catalogo.insumo),
    __metadata("design:type", Array)
], ArticuloInsumo.prototype, "detalles_pedido", void 0);
__decorate([
    typeorm_1.OneToMany((type) => articulo_manufacturado_detalle_entity_1.ArticuloManufacturadoDetalle, (detalle_semielaborado) => detalle_semielaborado.insumo),
    __metadata("design:type", Array)
], ArticuloInsumo.prototype, "detalles_manufacturado", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => rubro_articulo_entity_1.RubroArticulo, (rubro_insumo) => rubro_insumo.insumos, {
        eager: true,
    }),
    __metadata("design:type", rubro_articulo_entity_1.RubroArticulo)
], ArticuloInsumo.prototype, "rubro_insumo", void 0);
ArticuloInsumo = __decorate([
    typeorm_1.Entity('ArticuloInsumo')
], ArticuloInsumo);
exports.ArticuloInsumo = ArticuloInsumo;
//# sourceMappingURL=articulo-insumo.entity.js.map