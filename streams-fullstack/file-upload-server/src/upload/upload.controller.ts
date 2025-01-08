import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UploadResponse } from '../interfaces/upload.interface';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponse> {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }

    try {
      const uploadPath = join(__dirname, '..', '..', 'uploads');
      const writeStream = createWriteStream(
        join(uploadPath, file.originalname),
      );

      writeStream.write(file.buffer);
      writeStream.end();

      return {
        message: 'Arquivo enviado com sucesso',
        filename: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Erro ao processar arquivo ');
    }
  }
}
