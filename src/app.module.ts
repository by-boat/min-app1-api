import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAssetsController } from './get-assets/get-assets.controller';
import { GetGruopsController } from './get-gruops/get-gruops.controller';

@Module({
  imports: [],
  controllers: [AppController, GetAssetsController, GetGruopsController],
  providers: [AppService],
})
export class AppModule {}
