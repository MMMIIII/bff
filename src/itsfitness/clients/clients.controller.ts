import { Controller, Get } from '@nestjs/common';
import { ROUTES } from 'src/configuration/routes';
import { ClientsService } from './clients.service';

@Controller(`${ROUTES.itsfitness}/clients`)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getProfile() {
    return this.clientsService.getProfile();
  }
}
