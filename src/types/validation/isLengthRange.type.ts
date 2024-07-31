import { ValidationArguments } from 'class-validator';

export enum IsLengthRangeErrorMessage {
  onlyMax = 'onlyMax',
  onlyMin = 'onlyMin',
  minAndMax = 'minAndMax',
  fromAndTo = 'fromAndTo',
}

export interface Range {
  fromAndTo?: number;
  max?: number;
  min?: number;
}

export interface Args extends ValidationArguments {
  constraints: [Range, IsLengthRangeErrorMessage];
}
