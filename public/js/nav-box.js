$(function(){
	$('body').append('<script src="https://cdn.bootcss.com/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>')
	$('body').append('<script src="https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>')
	let nav=$('<div class="col-md-2" id="nav"><div id="navBox" class="list-group"></div></div>')
	nav.css({
		    position: 'fixed',
		    top: '50px',
		    left: '-228px'
		})
		
	$('body').prepend(nav)

	
	let content = $('.content');

	let h1s = content.find('h1')
	let h2s = content.find('h2')
	let h3s = content.find('h3')
	let h4s = content.find('h4')
	let hs=[]
	let navBox = $('#navBox')
	let width = parseInt(navBox.css("width"))
	let step=4;
	nav.hover(function(){
		nav.css({
			left:'0px'
		})
	}, function(){
		nav.css({
			left:-width+5
		})
	})
	let tmpId=0
	console.log(h1s.length)
	console.log(window.location.pathname)
	if(window.location.pathname =='/'){
		console.log('index.html')
		let h1s = $('h1')
		h1s.each(function(i,h){
			h = $(h);
			let id=h.attr('id')
			if(id==undefined){
				id= 'titleid-' + tmpId
				tmpId += 1
				h.attr('id', id)
			}
			hs.push({weight:1,
				top:h.position().top,
				id:id,
				text:h.text()
			})
		})

	}else{
		h1s.each(function(i,h){
			h = $(h);
			let id=h.attr('id')
			if(id==undefined){
				id= 'titleid-' + tmpId
				tmpId += 1
				h.attr('id', id)
			}
			hs.push({weight:1,
				top:h.position().top,
				id: id,
				text:h.text()
			})
		})
		h2s.each(function(i,h){
			h = $(h);
			hs.push({weight:2,
				top:h.position().top,
				id:h.attr('id'),
				text:h.text()
			})
		})
		h3s.each(function(i,h){
			h = $(h);
			hs.push({weight:3,
				top:h.position().top,
				id:h.attr('id'),
				text:h.text()
			})
		})
		h4s.each(function(i,h){
			h = $(h);
			hs.push({weight:4,
				top:h.position().top,
				id:h.attr('id'),
				text:h.text()
			})
		})

	}
	

	hs.sort(function(a, b){
		return a.top - b.top
	})
	hs.forEach(function(obj){
		link = '<a class="list-group-item list-group-item-action" style="background-color: rgba(255, 255, 255, 0);" href="#'+ obj.id +'">'+ obj.text +'</a>'
		let indentation=step * (obj.weight-2)
		let w = width - indentation
		link = $(link).css({left:indentation + 'px', width:w + 'px'})
		navBox.append(link)
	})
	// $('body').scrollspy({ target: '#navBox' })
})