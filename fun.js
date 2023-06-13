function msg() {
    const msg = prompt("input")
    alert(msg)
}

function msg1() {
    alert("wii u")
}
function confirmation() {
    const request = confirm("Are you sure you want to do this? This will use the superskaterhax exploit that is meant to run on 3DS! (dont worry nothing will happen on your Wii U.)")

    if (request) {
        alert("Press OK to continue")
        window.location.replace("https://zoogie.github.io/web/super/sk3.html")
    } else {
        alert("Press ok to return to the home page.")
    }
    
}