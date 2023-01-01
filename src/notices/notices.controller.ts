import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { Notice } from './entities/notice.entity';
import { NoticesService } from './notices.service';

@Controller('notices')
export class NoticesController {

    constructor(private readonly noticesService: NoticesService) { }

    @Get()
    getAll(): Notice[] {
        return this.noticesService.getAll();
    }

    @Get('search')
    search(@Query('title') searchingTitle: string) {
        return `We are searching for a notice with a made after: ${searchingTitle}`;
    }

    @Get(':id')
    getOne(@Param('id') noticeId: number): Notice {
        return this.noticesService.getOne(noticeId);
    }

    @Post()
    create(@Body() noticeData: CreateNoticeDto) {
        return this.noticesService.create(noticeData);
    }

    @Delete(':id')
    remove(@Param('id') noticeId: number) {
        return this.noticesService.deleteOne(noticeId);
    }

    @Patch(':id')
    patch(@Param('id') noticeId: number, @Body() updateData) {
        return this.noticesService.update(noticeId, updateData);
    }
}
