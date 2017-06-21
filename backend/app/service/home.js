module.exports = app => {
  class Home extends app.Service {
    * find() {
      console.log(this.app.mysql.select('my_test'));
      const user = {id: 1};
      return {
        user,
      };
    }
  }
  return Home;
};