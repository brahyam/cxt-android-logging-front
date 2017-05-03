import {Log} from './log';

export const LOGS:Log[] = [
  {
    _id: '1',
    packageName: 'NIH',
    ticket: 'NIH-123',
    versionName: '1.0.1-TEST',
    logCat: 'test log cat',
    createdAt: new Date()
  },
  {
    _id: '2',
    packageName: 'UAB',
    ticket: 'UAB-123',
    versionName: '1.0.1-TEST',
    logCat: 'test log cat',
    createdAt: new Date()
  },
  {
    _id: '3',
    packageName: 'GLOBE',
    ticket: 'GLOBAL-123',
    versionName: '1.0.1-TEST',
    logCat: 'test log cat',
    createdAt: new Date()
  }
];
