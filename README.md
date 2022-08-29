# RexAgri API Storage 🤖
## Description
RexAgri-API-Storage is a robot 🤖 to fetch and store snapshots data from the [Rex Agri App].
The database is used as Business Inteligence datasource do generate gerencial reports in [Power BI].

## Techs
[Node.js]: <http://nodejs.org>
[Sequelize]: <https://sequelize.org/>
[SQL Server]: <https://www.microsoft.com/sql-server/>
[log-to-file]: <https://www.npmjs.com/package/log-to-file>
[Power BI]: <https://powerbi.microsoft.com/>
[Rex Agri App]: <https://app.rexagri.com/>
- [Node.js]
- [Sequelize]
- [SQL Server]
- [log-to-file]

## Usage
- Clone the repository
- Fill the environment variable list as the example file
- Run:
```sh
cd rexagri-api-storage
npm i
npm start
```
The robot will register yesterday snapnhots data.
The app also can be scheduled to execute every day, registering the -1 day data.