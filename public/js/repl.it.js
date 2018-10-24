$(document).ready(function(){
    // 编辑器高度
    const Height = 500
    // 全屏时top
    const FullTop = 90
    // 全屏时left
    const FullLeft = 20
    // 隐藏时坐标
    const HideLeft = 0
    const HideTop = 0
    const HideWidth = 0
    const HideHeight = 0
    // 点击过的btnGroup
    let _btnGroup = null
    // 状态记录
    let status={
        open:false,
        full:false,
    }
    let repl_url = $('#repl-url').attr('href')
    console.log(repl_url)
    let iframe = `<iframe height="${Height}" width="100%" src="${repl_url}" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`
    iframe = $(iframe)
    let codes = $('figure.highlight')
    let firstCode = null
    let btnGroup = $('<div class="btn-group">')
    let btnOpen = $('<button class="btn btn-default btn-sm" >调试</button>')
    let btnClose = $('<button class="btn  btn-sm">关闭</button>')
    let btnFull = $('<button class="btn btn-default btn-sm">全屏</button>')
    // 关闭全屏
    let btnMin = $('<button class="btn btn-default btn-sm" style="position:fixed">x</button>')
    btnMin.click(function(){
        normalSize()
    })
    btnGroup.append(btnOpen).append(btnFull).append(btnClose)
    // btnGroup.insertAfter(codes)
    codes.hover( function () {
        // let code = $(this)
        btnGroup.insertAfter(this)
        console.log('hover')
        btnMin.css('z-index', 1001)
        // let code = $(this)
        // let top = code.offset().top + code.css('height')
        // let left = code.css('left')
        // btnGroup.offset({
        //     top:top,
        //     left:left
        // })
        // top = btnGroup.css('top')
        // left = btnGroup.css('left')
        // TweenLite.to(btnGroup, 0.5,{
        //     top:top,
        //     left:left
        // })
    })

    btnGroup.css('height', 20)
    btnGroup.css('margin-top', -50)

    let minSize = function () {
        status.open = false
        status.full = false
        TweenLite.to(iframe, 0.5, {
            width: HideWidth,
            height: HideHeight,
            top: HideTop,
            left: HideLeft,

        })
        TweenLite.to(btnMin, 0.5, {
            top: HideTop,
            left: HideLeft,

        })
    }

    if(codes.length){
        firstCode = $(codes[0])
        btnGroup.insertAfter(firstCode)
        iframe.insertAfter(firstCode)
        btnMin.insertAfter(firstCode)
        iframe.css('position', 'fixed')
        minSize()
        
    }

    let normalSize=function(btn){
        status.full=false
        status.open=true
        if (btn){
            btn = $(btn)
        }else{
            btn = _btnGroup
        }
        let top = btn.offset().top
        let left = btn.offset().left
        btnGroup.css('z-index', 501)
        iframe.css('z-index', 500)
        iframe.offset({top:top, left:left})
        TweenLite.to(iframe, 0.5, {
            width: firstCode.css('width'),
            height: Height,
        })
        TweenLite.to(btnMin, 0.5, {
            top: HideTop,
            left: HideLeft,

        })

    }

    btnGroup.click(function(){
        _btnGroup = $(this)
    })


    let fullSize = function(){
        status.full=true
        status.open=true
        let win = $(window)
        let top = FullTop
        let left = FullLeft
        btnMin.css('z-index', 1001)
        iframe.css('z-index', 1000)
        iframe.show()
        btnMin.show()
        TweenLite.to(iframe, 0.5, {
            width: win.width() - 40,
            height: win.height() - 100,
            top: top,
            left: left,

        })

        // btnMin
        TweenLite.to(btnMin, 0.5, {
            top: top+2,
            left: left+2,
        })
    }

    btnOpen.click(function(){
        normalSize(this)
    })

    btnClose.click(function(){
        minSize()
    })

    btnFull.click(function(){
        fullSize()
    })

    $(window).scroll(function(){
        if(status.open){
            if(!status.full){
                normalSize()
            }
        }
    })

})