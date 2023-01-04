import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticesService {
    private notices: Notice[] = [];

    getAll(): Notice[] {
        return this.notices;
    }

    getOne(id: number): Notice {
        const notice = this.notices.find(notice => notice.id === id);
        if (!notice) {
            throw new NotFoundException(`Notice with ID ${id} not found.`);
        }
        return notice;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.notices = this.notices.filter(notice => notice.id !== id);
    }

    create(noticeData: CreateNoticeDto): boolean {
        this.notices.push({ id: this.notices.length + 1, ...noticeData });
        return true;
    }

    update(id: number, updateData: Notice) {
        const notice = this.getOne(id);
        this.deleteOne(id);
        this.notices.push({ ...notice, ...updateData });
    }
}
