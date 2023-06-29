let menuIcon = document.getElementById( 'menuIconM' );
let menu = document.getElementById( 'menuM' );
let span2 = document.getElementById( 'span2' );

console.log(menuIcon,menu)

menuIcon.onmousedown = function ()
{
  menu.style.display = 'block';
  span2.style.width = '100%';
}
menuIcon.onmouseenter = function ()
{
  menu.style.display = 'none';
  span2.style.width = '80%';
}