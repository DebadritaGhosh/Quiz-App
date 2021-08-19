import path from 'path';
import dotenv from 'dotenv';

export default () => {
  switch (process.env.NODE_ENV) {
    case 'development':
    case 'production':
      dotenv.config({
        path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
      });
      break;
    default:
      throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!');
  }
  dotenv.config();
};
