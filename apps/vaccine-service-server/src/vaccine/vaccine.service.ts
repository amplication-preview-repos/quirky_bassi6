import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VaccineServiceBase } from "./base/vaccine.service.base";

@Injectable()
export class VaccineService extends VaccineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
