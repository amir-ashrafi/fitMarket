import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getDashboard() {
    return {
      message: 'Welcome Admin 👑',
      stats: {
        users: 120,
        activeUsers: 98,
      },
    };
  }
}

