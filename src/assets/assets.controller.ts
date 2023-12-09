import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  all() {
    return this.assetsService.all();
  }

  @Post()
  create(@Body() body: { id: string, symbol: string }) {
    return this.assetsService.create(body);
  }
}