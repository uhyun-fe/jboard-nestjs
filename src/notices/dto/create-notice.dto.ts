import { IsString } from "class-validator";

export class CreateNoticeDto {

    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsString({ each: true })
    readonly tags: string[];
}