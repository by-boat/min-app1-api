import { Controller, Get } from '@nestjs/common';
import { baseURL } from 'src/main';
import utils from '../utils'

@Controller('get-assets')
export class GetAssetsController {

  // 获取首页banner列表
  @Get('index-banners')
  getIndexBanner() {
    let banners = [
      'banner1.png',
      'banner2.png',
      [
        'banner3.png',
        'gif1.gif',
      ]
    ]
    banners = banners.map(banner => {
      if (Array.isArray(banner)) {
        return [
          baseURL + 'images/' + banner[0],
          baseURL + 'images/' + banner[1],
        ]
      }
      return baseURL + 'images/' + banner
    })
    return utils.sussecc_respoense(banners)
  }

  
}
