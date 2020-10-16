/*  eslint-disable */
print('Start #################################################################');

db = db.getSiblingDB('api_ad2019');
db.createUser(
  {
    user: 'ad2019',
    pwd: 'ad20191234',
    roles: [{ role: 'readWrite', db: 'api_ad2019' }],
  },
);
db.createCollection('users');

print('END #################################################################');