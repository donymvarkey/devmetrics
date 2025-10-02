import config from '../config';
import logger from '../utils/logger';
import { Sequelize } from 'sequelize';

class DatabaseService {
  private sequelize: Sequelize | null;

  constructor() {
    this.sequelize = null;
  }

  async connectToDB() {
    try {
      this.sequelize = new Sequelize(config.db.db!, config.db.user!, config.db.password, {
        host: config.db.host,
        dialect: 'postgres'
      });
      await this.sequelize.authenticate();
      logger.info('Database connection established successfully.');
    } catch (error) {
      logger.error('Database connection error:', error);
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
