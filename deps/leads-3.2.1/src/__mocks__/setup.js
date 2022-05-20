import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockCanvas from './HTMLCanvasMock';

Enzyme.configure({ adapter: new Adapter() });
mockCanvas(global);
