const Categories = require("./categories.model");
const Subcategories = require("./subcategories.model");
const Todos = require("./todos.model");
const Users = require("./users.model");

const initModels = () => {

  {
    Todos.belongsTo(Users, { foreignKey: "userId" });
    Users.hasMany(Todos, { foreignKey: "userId" });
  }
 
  {
    Todos.belongsTo(Categories, { foreignKey: "categoryId" });
    Categories.hasMany(Todos, { foreignKey: "categoryId" });
  }

  {
    Todos.belongsToMany(Subcategories, { through: "todos_subcategories", foreignKey: "todoId", otherKey: "subcategoryId", timestamps: false });
    Subcategories.belongsToMany(Todos, { through: "todos_subcategories", foreignKey: "subcategoryId", otherKey: "todoId" });
  }
}

module.exports = initModels;