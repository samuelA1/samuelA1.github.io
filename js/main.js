// Typeit
$(function(){
  $(".type").typed({
    strings: [
      "| build responsive websites",
      "| always ready to learn more"
    ],
    startDelay: 1000,
		backDelay: 2000,
    loop: true
  })
});

// scroll
$('body').scrollspy({ target: '#navbarNav' })

// lazy load

$(function() {
   $('.lazy').lazy();
});
