import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) {}

    create(data: { asset_id: string, price: number, status: OrderStatus }) {
        data.status = OrderStatus.PENDING;
        return this.prismaService.order.create({ data });
    }

    all() {
        return this.prismaService.order.findMany();
    }
}
