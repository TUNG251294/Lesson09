let imgObj = document.getElementById('soccer');

//khai báo biến toàn cục
function init() {
    imgObj.style.position = 'relative';//absolute: tuyệt đối
    imgObj.style.left = '0px';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = init;