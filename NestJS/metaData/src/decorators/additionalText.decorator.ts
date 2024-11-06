import { SetMetadata } from '@nestjs/common';

export const AdditionalText = (...additionalText: string[]) =>
  SetMetadata('additionalText', additionalText);
