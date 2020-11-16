$(document).ready(function(){
        $('body').removeClass('fade-out');
        // Get the clicked Element
        if (window.localStorage.getItem('item') == 0 ){
            $('[data-slide-to="0"]').click()
        }
        else if (window.localStorage.getItem('item') == 1 ){
            $('[data-slide-to="1"]').click()
        }
        else if (window.localStorage.getItem('item') == 2 ){
            $('[data-slide-to="2"]').click()
        }
        else if (window.localStorage.getItem('item') == 3){
            $('[data-slide-to="3"]').click()
        }

        $('#FAQS a').on('click',function(event){ //Handle FAQS footer-link
            event.preventDefault()
            $('#FAQS').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'3'})
            $('[data-slide-to="3"]').addClass('active').siblings().removeClass('active')
            $('#header .header-title .page-title').text(event.target.text)
        })

        // current footer Navigate
        $('.company-footer-links ul li a').on('click',function(event){
            event.preventDefault()
            $this = $(this)

            if($this.parent().attr('id') == 'about'){ //handle About footer-link
                $('#about').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'0'})
                $('[data-slide-to="0"]').addClass('active').siblings().removeClass('active')
                $('#header .header-title .page-title').text($this.text())
            }

            else if($this.parent().attr('id') == 'careers'){ //handle careers footer-link
                $('#careers').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'1'})
                $('[data-slide-to="1"]').addClass('active').siblings().removeClass('active')
                $('#header .header-title .page-title').text($this.text())
            }

            else if($this.parent().attr('id') == 'contact'){ //handle contact footer-link
                $('#contact').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'2'})
                $('[data-slide-to="2"]').addClass('active').siblings().removeClass('active')
                $('#header .header-title .page-title').text($this.text()+' us')
            }

            else {
                location.replace($this.attr('href'))
            }
        })

})
