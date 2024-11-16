import { IsArray, IsDate, IsDateString, IsEmpty, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
 @IsString({ each: true })
  readonly artist: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}