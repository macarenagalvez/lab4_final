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
exports.RubroGeneralService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../base/services/base.service");
const rubro_general_repository_1 = require("./rubro-general.repository");
let RubroGeneralService = class RubroGeneralService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
        this.repository = repository;
    }
};
RubroGeneralService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [rubro_general_repository_1.RubroGeneralRepository])
], RubroGeneralService);
exports.RubroGeneralService = RubroGeneralService;
//# sourceMappingURL=rubro-general.service.js.map