import {makeRequest as mReq} from './mrequest';

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        this.onChange(true)
      } else {
        if (cb) cb(false);
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token;
    logOutRequest((res) => {
      if (res) {
        if (cb) cb();
        this.onChange(false);
      }
    })
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {
  }
};

function pretendRequest(email, pass, cb) {
  var jsonData = {'usermail': email, 'password': pass};
  var parreq = {
      method: 'POST',
      params: jsonData,
      url: 'apiUser/login'
  };

  mReq(parreq)
    .then(function (datums) {
      if (datums) {
        cb({
          authenticated: true,
          token: datums.token
        })
      }
    })
    .catch(function (err) {
      cb({authenticated: false})
      console.error('login Augh, there was an error!', err.statusText);
    });
}

function logOutRequest(cb) {
  var parreq = {
    method: 'PUT',
    params: {},
    url: 'apiUser/logout'
  };

  mReq(parreq)
    .then(function (datums) {
      cb({
        authenticated: false
      })
    })
    .catch(function (err) {
      console.error('logout Augh, there was an error!', err.statusText);
    });
}
