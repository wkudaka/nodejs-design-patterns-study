const JsonConfig = require('./json_config');

const cfg = new JsonConfig();

cfg.read('samples/cfg.json');
cfg.set('nodejs', 'design patterns');
cfg.save('samples/cfg_mod.json');
