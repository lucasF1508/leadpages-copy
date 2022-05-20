import { Config } from '../config';

describe('Config :', () => {
  let config: Config;

  beforeEach(() => {
    config = new Config();
  });

  describe('set method ::', () => {
    it('should set simple key value pair in config', () => {
      let key = 'key', value = 'value';
      config.set(key, value);
      expect(config.get(key)).toEqual(value);
    });

    it('should set deep key value pair in config', () => {
      let key = 'deep.key', value = 'value';
      config.set('deep', {});
      config.set(key, value);
      expect(config.get(key)).toEqual(value);
    });
  });

  describe('loadConfig method ::', function() {
    it('should set an entire object', function() {
      var obj = {
        foo: 'bar',
        baz: 'ban'
      };

      config.loadConfig(obj);

      expect(config.get('foo')).toEqual('bar');
      expect(config.get('baz')).toEqual('ban');
    });
  });

  describe('getInstance static method ::', function() {
    it('returns the same instance always', function() {
      var config1 = Config.getInstance();
      var config2 = Config.getInstance();

      expect(config1).toEqual(config2);
    });
  });
});
