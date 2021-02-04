// var theHeading = jQuery("h1")
// theHeading.remove()
// theHeading.html("User Admin Editor")
// theHeading.css("color", "yellow")
// theHeading.html("User Admin Editor").css("background-color", "red").css("color", "blue").append("!").append("<button>Go!</button>")
var users = [
  {username: 'tlee', password: '', firstName: 'Tim', lastName: 'Birns Lee', role: 'FACULTY'},
  {username: 'alovelace', password: '', firstName: 'Ada', lastName: 'Lovelace', role: 'FACULTY'},
  {username: 'cgarcia', password: '', firstName: 'Charlie', lastName: 'Garcia', role: 'FACULTY'},
  {username: 'dcraig', password: '', firstName: 'Dan', lastName: 'Craig', role: 'FACULTY'},
  {username: 'sbolivar', password: '', firstName: 'Simon', lastName: 'Boliver', role: 'FACULTY'}
]
var theTableBody = jQuery("tbody")
function renderUsers(users) {
  theTableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    theTableBody
    .append(`
    <tr>
      <td>${user.username}</td>
      <td>${user.password}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.role}</td>
      <td align="right">
        <button><i class="pull-right fa fa-times fa-lg"></i></button>
        <button><i class="pull-right fa fa-pencil-alt fa-lg"></i></button>
      </td>
    </tr>`)
  }
}
// renderUsers(users)

function createUser(user) {
  users.push(user)
  renderUsers(users)
}
// createUser({username: 'exp', password: '', firstName: 'fff', lastName: 'lll', role: 'FACULTY'})
