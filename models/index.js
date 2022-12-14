const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Users.hasMany(Posts, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Users.hasMany(Comments, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'userId',
});

Comments.belongsTo(Posts, {
    foreignKey: 'postId',
});

module.exports = {
    Users,
    Comments,
    Posts
};