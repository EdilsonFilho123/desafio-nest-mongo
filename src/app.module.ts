import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, AssetsModule, OrdersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}