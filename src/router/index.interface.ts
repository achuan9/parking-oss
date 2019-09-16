import React from 'react';

export interface IRoute {
  readonly title: string,
  readonly path: string,
  readonly icon?: string,
  readonly component?: React.FC,
  readonly children?: IRoute[] 
}