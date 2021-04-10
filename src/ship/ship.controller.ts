import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common'
import { ShipService } from './ship.service'
import { CreateShipDto } from './dto/create-ship.dto'
import { UpdateShipDto } from './dto/update-ship.dto'
import { ResponseShipDto } from './dto/response-ship.dto'

@Controller('ship')
export class ShipController {
  constructor (private readonly shipService: ShipService) { }

  @Post()
  create (@Body(ValidationPipe) createShipDto: CreateShipDto): Promise<ResponseShipDto> {
    return this.shipService.create(createShipDto)
  }

  @Get()
  findAll () {
    return this.shipService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.shipService.findOne(+id)
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateShipDto: UpdateShipDto) {
    return this.shipService.update(+id, updateShipDto)
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.shipService.remove(+id)
  }
}
