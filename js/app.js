
function Utils() {}
Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();
    
        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop + 1));
        }
    }
};
    
var Util = new Utils();

function getCurrentPage() {
    var $page = $('#home');
    if(Util.isElementInView($page, false)) {
        return $page;
    }
    // $page = $('#about');
    // if(Util.isElementInView($page, false)) {
    //     return $page;
    // }
    $page = $('#experience');
    if(Util.isElementInView($page, false)) {
        return $page;
    }
    $page = $('#projects');
    if(Util.isElementInView($page, false)) {
        return $page;
    }
    $page = $('#education');
    if(Util.isElementInView($page, false)) {
        return $page;
    }
    return null;
}

$('#home-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 500);
});

$('#about-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 500);
});

$('#experience-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 500);
});

$('#projects-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#education').offset().top
    }, 500);
});

$(document).keydown(function(e){
    switch(e.which) {
    case 37: // left
        var $current = getCurrentPage();
        if($current.length) {
            var $prev_embed = $current.prev('.page');
            if($prev_embed.length) {
                $('html, body').animate({
                    scrollTop:$prev_embed.offset().top
                }, 500);
                return;
            }
        }
        break;

    case 39: // right
        var $current = getCurrentPage();
        if($current.length) {
            var $next_embed = $current.next('.page');
            if($next_embed.length) {
                $('html, body').animate({
                    scrollTop:$next_embed.offset().top
                }, 500);
                return;
            }
        }
        break;
    default: return; // exit this handler for other keys
    }
    e.preventDefault();
});

particlesJS('particles-js', {
    'particles': {
        'number': {
            'value': 250,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
        'color': {
            'value': '#ffffff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0,
                'color': '#000000'
            },
            'polygon': {
                'nb_sides': 5
            },
            'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
            }
        },
        'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
            }
        },
        'size': {
            'value': 3,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
            }
        },
        'line_linked': {
            'enable': true,
            'distance': 75,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
        },
        'move': {
            'enable': true,
            'speed': 1.5,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'grab'
            },
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            'resize': true
        },
        'modes': {
            'grab': {
                'distance': 5,
                'line_linked': {
                    'opacity': 1
                }
            },
            'bubble': {
                'distance': 400,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
            },
            'repulse': {
                'distance': 200,
                'duration': 0.4
            },
            'push': {
                'particles_nb': 4
            },
            'remove': {
                'particles_nb': 2
            }
        }
    },
    'retina_detect': true
});