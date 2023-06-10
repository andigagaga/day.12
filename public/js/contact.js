
function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let status = document.getElementById("input-status").value;
    let message = document.getElementById("input-message").value;

    if (name == "") {
        return alert("nama nya isi dulu syg");

    } else if(email == "") {
        return alert("email jg diisi donk")
    } else if(phone == "") {
        return alert("no hp nya juga lah");
    } else if(status == "") {
        return alert("status jg jangan malu")
    } else if(message == "") {
        return alert("isi dulu...")
    }

    let emailReceiver = "andigagaga1@gmail.com"

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?status=${status}&body=Halo, nama saya ${name}, ${message}. Silakan kontak saya di nomor ${phone}, terima kasih.`;
    a.click();
  



  

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(status);
    console.log(message);

    let emailer = {
        name,
        email,
        phone,
        status,
        message,
      };
    
      console.log(emailer);
}
  