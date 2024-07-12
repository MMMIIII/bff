// import { Module } from '@nestjs/common';
// import { ConfigService, ConfigModule } from '@nestjs/config';
// import {
//   WinstonModule,
//   utilities as nestWinstonModuleUtilities,
// } from 'nest-winston';
// import * as winston from 'winston';
// import * as Graylog2 from 'winston-graylog2';

// @Module({
//   imports: [
//     ConfigModule,
//     WinstonModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => {
//         const { combine, timestamp, printf, metadata } = winston.format;

//         const logFormat = printf(({ level, message, timestamp, ...meta }) => {
//           return `${timestamp} [${level}]: ${message} ${JSON.stringify(meta)}`;
//         });

//         const graylogConfig = {
//           name: 'Graylog',
//           level: 'info',
//           silent: false,
//           handleExceptions: true,
//           graylog: {
//             servers: [
//               { host: configService.get<string>('GRAYLOG_HOST'), port: 12201 },
//             ],
//             facility: configService.get<string>('GRAYLOG_FACILITY'),
//             hostname: 'BFF_Fitness',
//           },
//           staticMeta: { env: configService.get<string>('NODE_ENV') },
//         };

//         const transports = [
//           new Graylog2(graylogConfig),
//           new winston.transports.Console({
//             format: combine(
//               winston.format.colorize(),
//               winston.format.simple(),
//               nestWinstonModuleUtilities.format.nestLike(),
//             ),
//           }),
//         ];

//         return {
//           level: 'info',
//           format: combine(timestamp(), logFormat, metadata()),
//           transports,
//         };
//       },
//     }),
//   ],
//   exports: [WinstonModule],
// })
// export class LoggingModule {}
