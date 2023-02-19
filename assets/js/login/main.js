function login(){
    const nama = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    let i = 1;

    if(nama === 'root'){
        if(pass === 'root123'){
            window.location = '/assets/html/dash/index.html'
        }else{
            alert('password salah !!')
        }
    }else{
        alert(`username salah !!`)
    }
}