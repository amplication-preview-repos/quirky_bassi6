/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VaccineWhereUniqueInput } from "./VaccineWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VaccineUpdateInput } from "./VaccineUpdateInput";

@ArgsType()
class UpdateVaccineArgs {
  @ApiProperty({
    required: true,
    type: () => VaccineWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VaccineWhereUniqueInput)
  @Field(() => VaccineWhereUniqueInput, { nullable: false })
  where!: VaccineWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VaccineUpdateInput,
  })
  @ValidateNested()
  @Type(() => VaccineUpdateInput)
  @Field(() => VaccineUpdateInput, { nullable: false })
  data!: VaccineUpdateInput;
}

export { UpdateVaccineArgs as UpdateVaccineArgs };
