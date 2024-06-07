import { Module } from "@nestjs/common";
import { VaccineModuleBase } from "./base/vaccine.module.base";
import { VaccineService } from "./vaccine.service";
import { VaccineController } from "./vaccine.controller";
import { VaccineResolver } from "./vaccine.resolver";

@Module({
  imports: [VaccineModuleBase],
  controllers: [VaccineController],
  providers: [VaccineService, VaccineResolver],
  exports: [VaccineService],
})
export class VaccineModule {}
