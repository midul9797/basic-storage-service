import jwt, { JwtPayload } from 'jsonwebtoken';

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload;
};

export const jwtHelpers = {
  decodeToken,
};
