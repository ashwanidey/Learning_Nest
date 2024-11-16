import { Controller, Get, Put, Delete, Post, Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-songs-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService : SongsService) {}
  
  @Post()
  create(@Body() createSongsDto: CreateSongsDTO) {
    // @Body is used to extract the entire body of a request
    return this.songsService.create(createSongsDto);
  }
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        error.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
   
  }
  @Get(':id')
  findOne(
    @Param('id',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id:number
  ) {
    return `fetch song on the based on id ${typeof id}`;
  }

  @Put(':id')
  update() {
    return 'update song on the based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}