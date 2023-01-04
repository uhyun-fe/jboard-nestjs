import { IsString } from "class-validator";

export class CreateFbDto {

    @IsString()
    readonly title: string;

    @IsString()
    readonly writer: string;

    @IsString({ each: true })
    readonly tags: string[];

    @IsString()
    readonly content: string;

}