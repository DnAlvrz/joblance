const Role = require('../models/Role');

const findOrCreateRole = async (name) => {
  return await Role.exists({name:name}) ? await Role.findOne({name:name}) : await Role.create({
    name: name,
    permissions: `${name}Permissions`
  });
}
module.exports = {
  findOrCreateRole,
}