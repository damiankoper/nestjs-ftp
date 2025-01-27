"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FtpModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FtpModule = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const ftp_service_1 = require("./ftp.service");
let FtpModule = FtpModule_1 = class FtpModule {
    static forRootFtpAsync(options) {
        return {
            module: FtpModule_1,
            imports: options.imports || [],
            providers: [
                {
                    provide: constants_1.CONFIG_CONNECTION_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
                ftp_service_1.FtpService
            ],
            exports: [ftp_service_1.FtpService],
        };
    }
};
FtpModule = FtpModule_1 = __decorate([
    common_1.Module({})
], FtpModule);
exports.FtpModule = FtpModule;
//# sourceMappingURL=nestjs-ftp.module.js.map