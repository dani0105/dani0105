var previusTarget = null;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        let href = this.getAttribute('href');
        
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash=href;
        });

        let hash = href.substring(1);
        let target = `#link-${hash}`;

        $(target).addClass('active');
        if (previusTarget && previusTarget != target) {
            $(previusTarget).removeClass('active');
        }
        previusTarget = target;


    });
});


$(document).ready(function () {
    let hash = window.location.hash.substring(1);
    let target = `#link-${hash}`;
    $(target).addClass('active');
    previusTarget = target;
});
