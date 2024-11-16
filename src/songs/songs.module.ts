import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connecttion';

const mockSongsService = {
    findAll() {
      return [{
      id: 1,
      title: "Lasting lover"
      }];
    },
};


@Module({
  controllers: [SongsController],
  providers: [
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },

    {
      provide: 'CONNECTION',
      useValue: connection,
    },

      

    SongsService

    // The following code snippet shows how to inject the SongsService into the SongsModule:
    // {
    //   provide : SongsService,
    //   useClass : SongsService
    // }




  ]
})
export class SongsModule {}
