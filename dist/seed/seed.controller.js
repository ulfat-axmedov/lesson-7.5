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
exports.SeedController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const posts_service_1 = require("../posts/posts.service");
let SeedController = class SeedController {
    constructor(usersService, postsService) {
        this.usersService = usersService;
        this.postsService = postsService;
    }
    async seed() {
        const user = await this.usersService.create({ name: 'Admin', email: 'admin@example.com' });
        const post = await this.postsService.create({
            title: 'Hello World',
            content: 'First post',
            author: String(user._id),
        });
        return { user, post };
    }
};
exports.SeedController = SeedController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "seed", null);
exports.SeedController = SeedController = __decorate([
    (0, common_1.Controller)('seed'),
    __metadata("design:paramtypes", [users_service_1.UsersService, posts_service_1.PostsService])
], SeedController);
//# sourceMappingURL=seed.controller.js.map