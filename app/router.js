'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 测试页面
  router.get('/signup', controller.home.signup);
  router.get('/signin', controller.home.signin);
  router.get('/user', controller.home.findUser);
  router.get('/updateuser', controller.home.updateUser);
  router.get('/logoff', controller.home.logoff);
  router.get('/deleteuser', controller.home.deleteUser);
  router.get('/createproject', controller.home.createProject);
  router.get('/project', controller.home.indexProject);
  router.get('/showproject', controller.home.showProject);
  router.get('/updateproject', controller.home.updateProject);
  router.get('/deleteproject', controller.home.deleteProject);
  router.get('/createmysql', controller.home.createMysql);
  router.get('/mysql', controller.home.indexMysql);

  // 注册登录
  router.post('/api/v1/signup', controller.user.signup);
  router.post('/api/v1/signin', controller.user.signin);
  router.get('/api/v1/signoff', controller.user.signout);

  // 用户信息
  router.get('/api/v1/user/:_id', controller.user.findUser);
  router.put('/api/v1/updateuser', controller.user.updateUser);
  router.delete('/api/v1/logout', controller.user.logOut);
  router.delete('/api/v1/deleteuser', controller.user.deleteUser);

  // project RESTful API
  router.resources('projects', '/api/v1/projects', controller.projects);

  // Mysql FESTful API
  router.resources('mysqls', '/api/v1/mysqls', controller.mysqls);

  // 文件上传删除
  router.post('/api/v1/ajaxupload', controller.files.ajaxUpload);
  router.post('/api/v1/bufferupload', controller.files.bufferUpload);
  router.post('/api/v1/formupload', controller.files.formUpload);
  router.post('/api/v1/multipleupload', controller.files.multipleUpload);
  router.post('/api/v1/delfile', controller.files.delFile);
  router.post('/api/v1/delfiles', controller.files.delFiles);
};
