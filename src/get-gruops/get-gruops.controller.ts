import { Controller, Get } from '@nestjs/common';
import { baseURL } from 'src/main';
import utils from '../utils'
import * as goodsList from '../mydatas/goodsList.json'

@Controller('get-gruops')
export class GetGruopsController {

  @Get()
  getGroups() {
    const new_goodsList: any = goodsList
    const arr = []
    for (let i = 1; i <= 3; i++) {
      arr[i - 1] = {
        big_bg: baseURL + 'images/big-bg' + i + '.png',
        goodsList: new_goodsList.slice((i - 1) * 10, i * 10)
      }
    }
    return utils.sussecc_respoense(arr)
  }

}
