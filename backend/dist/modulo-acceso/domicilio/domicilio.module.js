"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomicilioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const domicilio_controller_1 = require("./domicilio.controller");
const domicilio_repository_1 = require("./domicilio.repository");
const domicilio_service_1 = require("./domicilio.service");
let DomicilioModule = class DomicilioModule {
};
DomicilioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([domicilio_repository_1.DomicilioRepository])],
        providers: [domicilio_service_1.DomicilioService],
        controllers: [domicilio_controller_1.DomicilioController],
    })
], DomicilioModule);
exports.DomicilioModule = DomicilioModule;
//# sourceMappingURL=domicilio.module.js.map