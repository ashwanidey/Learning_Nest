import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'src/common/constants/connecttion';

@Injectable()
export class SongsService {

  constructor(
    @Inject('CONNECTION')
    private connection : Connection
  ){
   console.log(this.connection.CONNECTION_STRING)
  }

  private readonly songs = []

  create(song){ 
    this.songs.push(song);
    return this.songs;
  }

  findAll(){
    throw new Error('Error in Db whil fetching record');
    return this.songs;
  }
}
