# jadequartz

Jade Quartz is a community database project for the City of Austin's Asian American Resource Center. The growth of the Austin Asian Pacific Islander (API) population has led to increasing numbers of API-owned stores, restaurants, boutiques, religious organizations, community groups, non-profits, and news outlets. Jade Quartz will take in data about all these organizations into an easy-to-access database for AARC staff to use. 

The project will allow a user to log-in and input data via a submit form. In the form, fields will include Name of Organization/Business, address, phone number, main contact name, email address, ethnic affiliation, and category. Categories may include religious organization, restaurant, health and beauty business, etc. A dropdown menu will be made to show all these businesses grouped by a particular category chosen.

Users may be able to update data as necessary if there there are any changes (i.e. address change or email change or contact information changed).


## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Responsible disclosure](#responsible-disclosure)
- [Documentation](#documentation)
- [Resources](#resources)

## Installation

```bash
$ npm install --save sequelize

# And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
$ npm install --save tedious # MSSQL
```

Sequelize follows [SEMVER](http://semver.org). Supports Node v4 and above to use ES6 features.

## Features

- Schema definition
- Schema synchronization/dropping
- 1:1, 1:M & N:M Associations
- Through models
- Promises
- Hooks/callbacks/lifecycle events
- Prefetching/association including
- Transactions
- Migrations
- CLI ([sequelize-cli](https://github.com/sequelize/cli))

## Responsible disclosure
If you have any security issue to report, contact project maintainers privately. You can find contact information [here](https://github.com/sequelize/sequelize/blob/master/CONTACT.md)

## Documentation
- [Contributing](https://github.com/sequelize/sequelize/blob/master/CONTRIBUTING.md)
- [v4 Documentation](http://docs.sequelizejs.com)
- [v3 Documentation](https://sequelize.readthedocs.io/en/v3/)
- [v3 to v4 Upgrade Guide](http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html)

## Resources
- [Changelog](https://github.com/sequelize/sequelize/releases)
- [Slack](http://sequelize-slack.herokuapp.com/)
- [Google Groups](https://groups.google.com/forum/#!forum/sequelize)

### Tools
- [Add-ons & Plugins](https://github.com/sequelize/sequelize/wiki/Add-ons-&-Plugins)
- [Sequelize & TypeScript](https://github.com/RobinBuschmann/sequelize-typescript)

### Learning
- [Getting Started](http://docs.sequelizejs.com/manual/installation/getting-started)
- [Express Example](https://github.com/sequelize/express-example)


### Translations
- [English v4](http://docs.sequelizejs.com) (OFFICIAL)
- [中文文档 v4](https://github.com/demopark/sequelize-docs-Zh-CN) (UNOFFICIAL)
