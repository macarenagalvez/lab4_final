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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BaseService = class BaseService {
    constructor(genericRepository) {
        this.genericRepository = genericRepository;
    }
    async findAll() {
        try {
            return await this.genericRepository.find();
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async findOne(id) {
        try {
            return await this.genericRepository.findOne(id);
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async update(id, entity) {
        try {
            const responseAux = await this.genericRepository.findOne(id);
            if (responseAux == null) {
                throw new common_1.NotFoundException('El id no existe');
            }
            entity['id'] = Number(id);
            const mergeEntity = Object.assign(responseAux, entity);
            const response = await this.genericRepository.save(mergeEntity);
            return response;
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async save(entity) {
        try {
            const response = await this.genericRepository.save(entity);
            return response;
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async delete(id) {
        try {
            this.genericRepository.softDelete(id);
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
};
BaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map