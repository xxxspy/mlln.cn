function after_jquery(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function () { after_jquery(method) }, 50);
    }
};

function init() {
    let btnAna = $('#btnAna');
    let finp = $('#inpFile');
    let btnOut = $('#viewOutput');
    let frame = $('#outputArea')
    btnAna.click(function () {
        console.log(finp.val())
    })
    btnOut.click(function(){
        frame.attr('src', frame.attr('src'))
    })
}

(function () {
    after_jquery(init);
})()