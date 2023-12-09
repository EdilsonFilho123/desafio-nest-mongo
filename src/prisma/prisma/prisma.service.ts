import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'beforeExit'> implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: any) {
    this.$on('beforeExit', async () => {
      await app.close();
    })
  }

  // async assets() {
  //   return this.client.asset.findMany();
  // }

  // async createAsset(data) {
  //   return this.client.asset.create({ data });
  // }

  // async orders() {
  //   return this.client.order.findMany();
  // }

  // async createOrder(data) {
  //   return this.client.order.create({ data });
  // }
}