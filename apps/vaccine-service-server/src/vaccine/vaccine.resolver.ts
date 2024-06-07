import * as graphql from "@nestjs/graphql";
import { VaccineResolverBase } from "./base/vaccine.resolver.base";
import { Vaccine } from "./base/Vaccine";
import { VaccineService } from "./vaccine.service";

@graphql.Resolver(() => Vaccine)
export class VaccineResolver extends VaccineResolverBase {
  constructor(protected readonly service: VaccineService) {
    super(service);
  }
}
