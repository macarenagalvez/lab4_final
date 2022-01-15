"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_module_1 = require("./modulo-acceso/cliente/cliente.module");
const detalle_pedido_module_1 = require("./modulo-pedido/detalle-pedido/detalle-pedido.module");
const factura_module_1 = require("./modulo-pedido/factura/factura.module");
const pedido_module_1 = require("./modulo-pedido/pedido/pedido.module");
const articulo_insumo_module_1 = require("./modulo-stock/articulo-insumo/articulo-insumo.module");
const articulo_manufacturado_detalle_module_1 = require("./modulo-stock/articulo-manufacturado-detalle/articulo-manufacturado-detalle.module");
const articulo_manufacturado_module_1 = require("./modulo-stock/articulo-manufacturado/articulo-manufacturado.module");
const rubro_articulo_module_1 = require("./modulo-stock/rubro-articulo/rubro-articulo.module");
const rubro_general_module_1 = require("./modulo-stock/rubro-general/rubro-general.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            cliente_module_1.ClienteModule,
            detalle_pedido_module_1.DetalleFacturaModule,
            factura_module_1.FacturaModule,
            pedido_module_1.PedidoModule,
            articulo_insumo_module_1.ArticuloInsumoModule,
            articulo_manufacturado_module_1.ArticuloManufacturadoModule,
            articulo_manufacturado_detalle_module_1.ArticuloManufacturadoDetalleModule,
            rubro_articulo_module_1.RubroArticuloModule,
            rubro_general_module_1.RubroGeneralModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map