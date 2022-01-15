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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
class BaseController {
    constructor(_IBaseService) {
        this._IBaseService = _IBaseService;
    }
    async getAll(res) {
        try {
            const result = await this._IBaseService.findAll();
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Error de búsqueda.',
            });
        }
    }
    async getOne(res, id) {
        try {
            const result = await this._IBaseService.findOne(id);
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Error de búsqueda.',
            });
        }
    }
    async post(res, entity) {
        try {
            const result = await this._IBaseService.save(entity);
            return res.status(common_1.HttpStatus.CREATED).json(result);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error de creación.',
            });
        }
    }
    async put(res, id, entity) {
        try {
            const result = await this._IBaseService.update(id, entity);
            return res.status(common_1.HttpStatus.CREATED).json(result);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error de actualización.',
            });
        }
    }
    async delete(res, id) {
        try {
            await this._IBaseService.delete(id);
            return res.status(common_1.HttpStatus.OK).json();
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Error de eliminación.',
            });
        }
    }
}
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "getOne", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "post", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "put", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map