import * as bcrypt from 'bcryptjs';

export function generateHash(rawPassword: string): string {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, salt);
}