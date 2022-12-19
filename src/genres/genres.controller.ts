import {
  Controller,
  // Get,
  Post,
  Body,
  UseGuards,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GenreDTO } from './dto/genre.dto';
import { GenreService } from './genres.service';

@Controller('genre')
export class GenresController {
  constructor(private readonly genresService: GenreService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGenreDto: GenreDTO) {
    return this.genresService.createGenre(createGenreDto);
  }

  // @Get()
  // findAll() {
  //   return this.genresService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.genresService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
  //   return this.genresService.update(+id, updateGenreDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.genresService.remove(+id);
  // }
}
