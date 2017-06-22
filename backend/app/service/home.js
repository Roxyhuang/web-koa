module.exports = app => {
  class Home extends app.Service {
    * find() {
      const post = yield app.mysql.get('my_test', { id: 1 });
      return {
        post,
      };
    }
  }
  return Home;
};