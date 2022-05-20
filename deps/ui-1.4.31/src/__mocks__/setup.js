import 'raf/polyfill';
import mockCanvas from './HTMLCanvasMock';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-qa-selector' });

mockCanvas(global);
