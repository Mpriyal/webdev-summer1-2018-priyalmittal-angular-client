export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }
  findUserByUsername(username) {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/user/' + username + '/username')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  logout() {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  updateUser(user) {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
    }
  });
}

  createUser(username, password) {
    console.log(username);
    console.log(password);
    const user = {
      username: username,
      password: password,
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: ""
    };
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
