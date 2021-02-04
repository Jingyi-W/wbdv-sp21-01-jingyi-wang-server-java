var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var theTableBody
var users = [
  // {username: 'tlee', password: '', firstName: 'Tim', lastName: 'Birns Lee', role: 'FACULTY'},
  // {username: 'alovelace', password: '', firstName: 'Ada', lastName: 'Lovelace', role: 'FACULTY'},
  // {username: 'cgarcia', password: '', firstName: 'Charlie', lastName: 'Garcia', role: 'FACULTY'},
  // {username: 'dcraig', password: '', firstName: 'Dan', lastName: 'Craig', role: 'FACULTY'},
  // {username: 'sbolivar', password: '', firstName: 'Simon', lastName: 'Boliver', role: 'FACULTY'}
]
var $createBtn

function createUser(user) {
  users.push(user)
  renderUsers(users)
}
function deleteCourse(event) {
  var rmClicked = jQuery(event.target)
  users.splice(rmClicked.attr("id"), 1)
  renderUsers(users)
}

function renderUsers(users) {
  theTableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    theTableBody.append(`
      <tr class="wbdv-template wbdv-user wbdv-hidden">
        <td class="wbdv-username">${user.username}</td>
        <td>&nbsp;</td>
        <td class="wbdv-first-name">${user.firstName}</td>
        <td class="wbdv-last-name">${user.lastName}</td>
        <td class="wbdv-role">${user.role}</td>
        <td class="wbdv-actions" align="right">
          <span class="pull-right">
            <button><i class="pull-right fa-2x fa fa-times wbdv-remove" id="${i}"></i></button>
            <button><i class="pull-right fa-2x fa fa-pencil wbdv-edit" id="${i}"></i></button>
          </span>
        </td>
      </tr>`)
  }
  jQuery(".wbdv-remove").click(deleteCourse)
}


function main() {
  $usernameFld = $(".usernameFld")
  $passwordFld = $(".passwordFld")
  $firstNameFld = $(".firstNameFld")
  $lastNameFld = $(".lastNameFld")
  $roleFld = $(".roleFld")
  $createBtn = $("button.createBtn")
  theTableBody = jQuery("tbody")

  $createBtn.click(function () {
    var newCourse = {
      username: $usernameFld.val(),
      password: $passwordFld.val(),
      firstName: $firstNameFld.val(),
      lastName: $lastNameFld.val(),
      role: $roleFld.val()
    }
    createUser(newCourse)
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
  })
}
jQuery(main)
