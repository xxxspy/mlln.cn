var alphaDust = function () {

    var _menuOn = false;

    function initPostHeader() {
        $('.main .post').each(function () {
            var $post = $(this);
            var $header = $post.find('.post-header.index');
            var $title = $post.find('h1.title');
            var $readMoreLink = $post.find('a.read-more');

            var toggleHoverClass = function () {
                $header.toggleClass('hover');
            };

            $title.hover(toggleHoverClass, toggleHoverClass);
            $readMoreLink.hover(toggleHoverClass, toggleHoverClass);
        });
    }

    function _menuShow () {
        $('nav a').addClass('menu-active');
        $('.menu-bg').show();
        $('.menu-item').css({opacity: 0});
        TweenLite.to('.menu-container', 1, {padding: '0 40px'});
        TweenLite.to('.menu-bg', 1, {opacity: '0.92'});
        TweenMax.staggerTo('.menu-item', 0.5, {opacity: 1}, 0.3);
        _menuOn = true;

        $('.menu-bg').hover(function () {
            $('nav a').toggleClass('menu-close-hover');
        });
    }

    function _menuHide() {
        $('nav a').removeClass('menu-active');
        TweenLite.to('.menu-bg', 0.5, {opacity: '0', onComplete: function () {
            $('.menu-bg').hide();
        }});
        TweenLite.to('.menu-container', 0.5, {padding: '0 100px'});
        $('.menu-item').css({opacity: 0});
        _menuOn = false;
    }

    function initMenu() {

        $('nav a').click(function () {
            if(_menuOn) {
                _menuHide();
            } else {
                _menuShow();
            }
        });

        $('.menu-bg').click(function (e) {
            if(_menuOn && e.target === this) {
                _menuHide();
            }
        });
    }

    function  _hideWeibo() {
        let weibo = $('#weibo-container')
        weibo.hide()
        
    }

    function _openWeibo(){
        $('.menu-bg').show();
        TweenLite.to('.menu-bg', 1, { opacity: '0.92' });
        let weibo = $('#weibo-container')
        let width = $(window).width()
        let weiboWidth = 560
        let left = 0
        if (width > weiboWidth){
            left = (width - weiboWidth)/2
        }
        weibo.show()
        weibo.css({
            'z-index':1000, 
            display: 'block',
            height: 1100,
            width: 650,
            top: 150,
            left: left,
            position: 'fixed',
            overflow: 'scroll'
        })
        let menuBack = $('.menu-bg')
        menuBack.click(function () {
            $('.menu-bg').hide();
            $('.menu-bg').css({ opacity: '0' })
            weibo.hide()
        })
        return

        let menu = $('.menu-container')
        menu.hide()
        let script = `
        <script src="//tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
        `
        $('head').append(script)
        let html = `#document
                    <html xmlns:wb="http://open.weibo.com/wb">
                        <head>
                            ${script}
                        </head>
                        <body>
                            <wb:topic column="n" border="n" 
                                width="${width}" height="1190" tags="<%= item.title %>" language="zh_cn" version="base"
                                appkey="4ljXPc" footbar="y" url="<%- url_for(item.path) %>" filter="y" 
                                color="000000%2Cffffff%2C0078b6%2Ccccccc%2C333333%2Cfafeff%2C0078b6%2Ccccccc%2Ccccccc%2Ce9f4fb00">
                            </wb:topic>
                        </body>
                    </html>`
        let iframe = `<iframe data-content="${html}">

                    </iframe>`
        let element = `<div id="weibo-container">${script}<p>blablabla</p><wb:topic column="n" border="n" width="${width}" height="1190" tags="hello" language="zh_cn" version="base"
    appkey="4ljXPc" footbar="y" url="http://mlln.cn" filter="y" color="000000%2Cffffff%2C0078b6%2Ccccccc%2C333333%2Cfafeff%2C0078b6%2Ccccccc%2Ccccccc%2Ce9f4fb00"></wb:topic></div>`
        menuBack.append(element)
        menuBack.click(function(){
            $('#weibo-container').remove()
            $('.menu-bg').hide();
            $('.menu-bg').css({opacity: '0'})
            menu.show()
        })
    }

    function initWeibo() {
        if($('#weibo-open-btn').length){
            _hideWeibo()
            $('#weibo-open-btn').click(function(){
                _openWeibo()
                
            })

        }
    }

    function displayArchives() {
        $('.archive-post').css({opacity: 0});
        TweenMax.staggerTo('.archive-post', 0.4, {opacity: 1}, 0.15);
    }

    return {
        initPostHeader: initPostHeader,
        initMenu: initMenu,
        displayArchives: displayArchives,
        initWeibo: initWeibo
    };
}();


$(document).ready(function () {
    alphaDust.initPostHeader();
    alphaDust.initMenu();
    alphaDust.displayArchives();
    alphaDust.initWeibo();
});


$(document).ready(function () {
    let navToggler = $('#toggle-nav');
    navToggler.click(function () {
        if (navToggler.text() == '收起菜单') {
            navToggler.text('展开菜单')
        } else {
            navToggler.text('收起菜单')
        }
    })
})
