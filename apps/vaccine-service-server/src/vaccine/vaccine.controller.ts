import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VaccineService } from "./vaccine.service";
import { VaccineControllerBase } from "./base/vaccine.controller.base";

@swagger.ApiTags("vaccines")
@common.Controller("vaccines")
export class VaccineController extends VaccineControllerBase {
  constructor(protected readonly service: VaccineService) {
    super(service);
  }
}
