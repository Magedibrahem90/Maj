$(document).ready(function(){
    // check the footer clicked element
    $('.company-footer-links ul li a').on('click',function(){
        $this = $(this)
        if($this.parent().attr('id') == 'about'){
            window.localStorage.clear()
            window.localStorage.setItem('item','0')
        }
        if($this.parent().attr('id') == 'careers'){
            window.localStorage.clear()
            window.localStorage.setItem('item','1')
        }
        if($this.parent().attr('id') == 'contact'){
            window.localStorage.clear()
            window.localStorage.setItem('item','2')
        }
    })
    $('#FAQS a').on('click',function(){
        window.localStorage.clear()
        window.localStorage.setItem('item','3')
    })
})
