import config from './config.json';

export default class ConfigFactory {
  
  static load(env) {
    this.env = env;
    this.config = config[env];
  } 

  static read() {
    return this.config;
  } 

  static environment(){
    return this.env;
  }
}
