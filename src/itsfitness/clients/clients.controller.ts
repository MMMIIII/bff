import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller(`clients`)
@Auth()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getProfile() {
    return this.clientsService.getProfile();
  }
}
