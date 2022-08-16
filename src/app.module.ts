import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ItemsModule, AuthModule],
  controllers: [],
  providers: [ItemsService],
})
export class AppModule {}
