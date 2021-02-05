var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var theTableBody
var users = []
var $createBtn
var $updateBtn
var $searchBtn
var adminUserService = new AdminUserServiceClient()

function createUser(user) {
  adminUserService.createUser(user).then(function(actualUser){
    users.push(actualUser)
    renderUsers(users)
  })
}
function deleteUser(event) {
  var rmClicked = jQuery(event.target)
  var theIdx = rmClicked.attr("id")
  var theId = users[theIdx]._id
  adminUserService.deleteUser(theId).then(function(status){
    users.splice(rmClicked.attr("id"), 1)
    renderUsers(users)
  })
}
var selectedUser = null
function selectUser(event) {
  var selectClicked = jQuery(event.target)
  var theIdx = selectClicked.attr("id")
  selectedUser = users[theIdx]
  $usernameFld.val(selectedUser.username)
  $passwordFld.val(selectedUser.password)
  $firstNameFld.val(selectedUser.firstName)
  $lastNameFld.val(selectedUser.lastName)
  $roleFld.val(selectedUser.role)
}
function updateUser() {
  selectedUser.username = $usernameFld.val()
  selectedUser.password = $passwordFld.val()
  selectedUser.firstName = $firstNameFld.val()
  selectedUser.lastName = $lastNameFld.val()
  selectedUser.role = $roleFld.val()
  adminUserService.updateUser(selectedUser._id, selectedUser).then(function(status) {
    var theIdx = users.findIndex(user => user._id === selectedUser._id)
    users[theIdx] = selectedUser
    renderUsers(users)
  })
}
// function findUserById(userId) {
//   var inputedUserId = $usernameFld.val()
//   adminUserService.findUserById(inputedUserId)
//
// }


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
  jQuery(".wbdv-remove").click(deleteUser)
  jQuery(".wbdv-edit").click(selectUser)
}


function main() {
  $usernameFld = $(".usernameFld")
  $passwordFld = $(".passwordFld")
  $firstNameFld = $(".firstNameFld")
  $lastNameFld = $(".lastNameFld")
  $roleFld = $(".roleFld")

  theTableBody = jQuery("tbody")

  $createBtn = $("button.createBtn")
  $updateBtn = $("button.updateBtn")
  $searchBtn = $("button.searchBtn")

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
  $updateBtn.click(updateUser)
  $searchBtn.click(findUserById)

  adminUserService.findAllUsers().then(function (actualUsersFromServer) {
    users = actualUsersFromServer
    renderUsers(users)
  })
}
jQuery(main)
