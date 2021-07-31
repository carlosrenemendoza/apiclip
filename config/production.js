'use strict';
/**
 * Módulo de configuración del ambiente de producción
 * ejemplo: 
 *  {
 *      db: 'user@db:...',
 *   debug: false
 * }
 */
module.exports = {
      // db: 'postgres://postgres:M@gic10g@52.185.201.15:5432/DBPoseidonQA',
      db: 'postgres://postgres:M@gic10g@70.37.100.0:5432/DBRoldan',
      // DB_HOST: '104.215.76.36',
      DB_HOST: '70.37.100.0',
      DB_PORT: 5432,
      DB_USER: 'postgres',
      // DB_PASSWORD: 'M@gic10g',
      DB_PASSWORD: 'M@gic10g-2o19',
      DB_NAME : 'DBRoldan'
}