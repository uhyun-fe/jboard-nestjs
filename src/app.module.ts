import { Module } from '@nestjs/common';
import { NoticesController } from './notices/notices.controller';
import { NoticesService } from './notices/notices.service';

@Module({
  imports: [],
  controllers: [NoticesController],
  providers: [NoticesService],
})
export class AppModule { }
