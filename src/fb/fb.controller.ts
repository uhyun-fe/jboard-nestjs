import { Controller, Get, Post, Delete, Patch, Query, Param, Body } from '@nestjs/common';
import { CreateFbDto } from './dto/create-fb.dto';
import { Fb } from './entities/fb.entity';
import { FbService } from './fb.service';

@Controller('fb')
export class FbController {

    constructor(private readonly fbService: FbService) { }

    @Get()
    getList(
        @Query('title') title: string,
        @Query('writer') writer: string
    ): Fb[] {
        return this.fbService.getList(title, writer);
    }

    @Get(':id')
    getDetail(@Param('id') id: number): Fb {
        return this.fbService.getDetail(id);
    }

    @Post()
    create(@Body() data: CreateFbDto) {
        this.fbService.create(data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.fbService.remove(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: CreateFbDto) {
        this.fbService.update(id, data);
    }

}
