import { Module } from "@nestjs/common";
import { FbController } from './fb/fb.controller';
import { FbService } from './fb/fb.service';

@Module({
  imports: [],
  controllers: [FbController],
  providers: [FbService],
})
export class AppModule { }