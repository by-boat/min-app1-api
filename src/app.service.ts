import { Injectable } from '@nestjs/common';
import path from 'path';
import { baseURL } from './main';
const fs = require('fs')
// import img from './images/.873e0267-8dc9-42f4-b0c5-095d39c08bd5.png'

@Injectable()
export class AppService {
  getHello(): any {
    console.log(baseURL)
    return {
      code: 200,
      data: {
        title: 'hellow word',
      }
    };
  }
}
