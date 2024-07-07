import { Controller, Get, Req } from '@nestjs/common';
import { ROUTES } from 'src/configuration/routes';
import { ClientsService } from './clients.service';
import { getToken } from 'src/common/utils/getToken';

@Controller(`${ROUTES.itsfitness}/clients`)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getProfile(@Req() request: Request) {
    const token = getToken(request);
    return this.clientsService.getProfile(token); 
  }
}
