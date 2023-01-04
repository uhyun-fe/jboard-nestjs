import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFbDto } from './dto/create-fb.dto';
import { Fb } from './entities/fb.entity';

@Injectable()
export class FbService {
    private fbs: Fb[] = [];

    getList(title: string, writer: string): Fb[] {
        return this.fbs.filter(fb => (title ? fb.title.indexOf(title) >= 0 : true) && (writer ? fb.writer.indexOf(writer) >= 0 : true));
    }

    getDetail(id: number): Fb {
        const fb = this.fbs.find(fb => fb.id === id);
        if (!fb) {
            throw new NotFoundException(`${id}번 게시글이 존재하지 않습니다.`);
        }
        return fb;
    }

    create(data: CreateFbDto) {
        this.fbs.push({ id: this.fbs.length + 1, ...data, created_at: this.getNow(), updated_at: this.getNow() });
    }

    remove(id: number) {
        this.getDetail(id);
        this.fbs = this.fbs.filter(fb => fb.id !== id);
    }

    update(id: number, data: CreateFbDto) {
        const fb = this.getDetail(id);
        this.remove(id);
        this.fbs.push({ ...fb, ...data, updated_at: this.getNow() });
    }

    getNow() {
        const now = new Date();
        now.setHours(now.getHours() + 9);
        return now.toISOString().replace('T', ' ').substring(0, 19);
    }
}
