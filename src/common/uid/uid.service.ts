import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UidService {
  generateUid(): string {
    return uuidV4();
  }
}
