const click= document.querySelector('button');
click.addEventListener('click',put)

function put(){
    $("li.check").append("<input type='checkbox' name='' id='' class=''>");
    $("li.text").append("<input type='text' name='' id='' class=''>");

}
