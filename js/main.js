// Гамбургер
$('.top-menu-items__btn').click(function(event) {
    event.preventDefault();
    if($('.top-menu-items__btn').hasClass('active')) {
        $('.top-menu-items__btn').removeClass('active');
    } else {
        $('.top-menu-items__btn').addClass('active');
    }
});

// Промотування до секції
$('a[data-name]').click(function (event) {
    event.preventDefault();
    let $id = $(`section[data-name="${event.currentTarget.dataset["name"]}"]`);
    $('html').animate({ scrollTop: $id.offset().top }, 500);
});
//Добавление 9 товаров:
$('.furniture').append(`
                <div class="furniture__wrapper__new collapse justify-content-center justify-content-md-between flex-wrap ">
                    <div class="furniture__item1 my-4">
                        <div class="furniture__image-wrapper d-flex justify-content-center align-items-center position-relative">
                            <img src="./img/07_products/10.png" alt="" class="img-fluid">
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-059"
                                            data-src="./img/07_products/10.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Fairfield Love Chair"
                                            data-stars="3"
                                            data-price="$30.00"><span>Quick View</span>
                                    </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Fairfield Love Chair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$30.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item2 my-4">
                        <div class="furniture__image-wrapper d-flex justify-content-center align-items-center position-relative">
                            <img
                                    src="./img/07_products/11.png" alt="" class="img-fluid">
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2 "
                                            id="item-060"
                                            data-src="./img/07_products/11.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Chair 11"
                                            data-stars="2"
                                            data-price="$15.00"><span>Quick View</span>
                                    </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Chair 11</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="far fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$15.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item3  my-4">
                        <div class="furniture__image-wrapper position-relative d-flex justify-content-center align-items-center">
                            <div class="w-50"><img src="./img/07_products/12.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2 "
                                            id="item-061"
                                            data-src="./img/07_products/12.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name=" Chair 12"
                                            data-stars="2"
                                            data-crossed="$35.00"
                                            data-price="$25.00"><span>Quick View</span>
                                    </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Chair 12</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="far fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="crossed-text py-1 px-2"><span>$35.00</span></div>
                                    <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                        <span>$25.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item4 my-4">
                        <div class="furniture__image-wrapper d-flex position-relative justify-content-center align-items-center">
                            <div class="w-50"><img src="./img/07_products/13.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-062"
                                            data-src="./img/07_products/13.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Dalmore chair"
                                            data-stars="5"
                                            data-price="$15.00"><span>Quick View</span>
                                    </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Dalmore chair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$15.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item5  my-4">
                        <div class="furniture__image-wrapper d-flex position-relative justify-content-center align-items-center">
                           <div class="w-50"><img  src="./img/07_products/14.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-063"
                                            data-src="./img/07_products/14.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Chair 14"
                                            data-stars="2"
                                            data-price="$15.00"><span>Quick View</span>
                                    </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Chair 14</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="far fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$15.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item6  my-4">
                        <div class="furniture__image-wrapper d-flex justify-content-center position-relative align-items-center">
                            <div class="w-50"><img  src="./img/07_products/15.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-064"
                                            data-src="./img/07_products/15.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Florida rancho chair"
                                            data-stars="5"
                                            data-crossed="$35.00"
                                            data-price="$25.00"><span>Quick View</span></button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Florida rancho chair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="crossed-text py-1 px-2"><span>$35.00</span></div>
                                    <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                        <span>$25.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item7  my-4">
                        <div class="furniture__image-wrapper  position-relative d-flex justify-content-center align-items-center">
                            <div class="w-50"><img src="./img/07_products/16.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                        <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-065"
                                            data-src="./img/07_products/16.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Soho Armchair"
                                            data-stars="3"
                                            data-price="$15.00"><span>Quick View</span></button>

                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Soho Armchair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$15.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item8  my-4">
                        <div class="furniture__image-wrapper position-relative d-flex justify-content-center align-items-center">
                            <div class="w-50"><img src="./img/07_products/17.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                        <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-066"
                                            data-src="./img/07_products/17.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Shelby chair"
                                            data-stars="4"
                                            data-price="$15.00"><span>Quick View</span>
                                            </button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Shelby chair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="furniture__price font-weight-bold text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                    <span>$15.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="furniture__item9  my-4">
                        <div class="furniture__image-wrapper position-relative d-flex justify-content-center align-items-center">
                            <div><img src="./img/07_products/18.png" alt="" class="img-fluid"></div>
                            <div class="overlay position-absolute  flex-column justify-content-between align-items-center w-100 h-100">
                                <div class="overlay-top text-white text-center"><span>sale</span></div>
                                <div class="furniture__buttons d-flex justify-content-between w-100">
                                    <button type="button" class="furniture__view-item text-white py-1 px-2"
                                            id="item-067"
                                            data-src="./img/07_products/18.png" data-toggle="modal"
                                            data-target="#quick-view-modal"
                                            data-name="Zara armchair"
                                            data-stars="3"
                                            data-crossed="$35.00"
                                            data-price="$25.00"><span>Quick View</span></button>
                                    <button type="button"
                                            class="furniture__add-to-cart text-uppercase text-white py-1 px-2 font-weight-bolder">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>add to cart</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="furniture__interact-item d-flex flex-column align-items-center justify-content-center">
                            <div class="furniture__name text-center p-2"><span>Zara armchair</span></div>
                            <div class="furniture__item-rating text-center ">
                                <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                        class="fas fa-star"></i><i class="far fa-star"></i><i
                                        class="far fa-star"></i></span>
                            </div>
                            <div class="furniture__line my-3 d-flex justify-content-center">
                                <div class="orange-line position-relative"></div>
                            </div>
                            <div class="furniture__item-options-wrapper d-flex justify-content-between mb-2 ">
                                <div class="furniture__item-options d-flex">
                                    <div class="furniture__like mr-2 py-1 px-2"><span><i
                                            class="far fa-heart"></i></span></div>
                                    <div class="furniture__exchange py-1 px-2"><span><i class="fas fa-exchange-alt"></i></span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="crossed-text py-1 px-2"><span>$35.00</span></div>
                                    <div class="furniture__price font-weight-bold  text-white d-flex justify-content-between align-items-center py-1 px-2 ">
                                        <span>$25.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
`)
// скрытие товаров для дальнейшего использования collapse
$(".collapse").collapse('hide');

//показывание новых 9 товаров + анимация с кнопкой add more:
$('.btn-load-more').on('click', imageLoader)

function imageLoader() {
    $(this).animate({opacity: 0.1}, 1500);
    setTimeout(handler, 1500)

    function handler() {
        $(".collapse").collapse('show').addClass('d-flex')
        $('.btn-load-more').hide()
    }
}


$('#quick-view-modal').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('name')
    let imageLink = button.data('src')
    if (button.data("crossed")) {
        $(".toAddCrossed").addClass("qw-modal__crossed-price")
    } else {
        $(".toAddCrossed").text(" ")
        $(".toAddCrossed").removeClass("qw-modal__crossed-price")
    }
    let crossedPrice = button.data('crossed')

    let itemPrice = button.data('price')

    // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.qw-modal__price').text(' ')
    modal.find('.qw-modal__img').attr('src', imageLink)
    modal.find('.qw-modal__name').text(recipient)
    modal.find('.qw-modal__crossed-price').text(crossedPrice)
    modal.find('.qw-modal__price').text(itemPrice)
    modal.find('.modal-body input').val(recipient)
    $('.qw-modal__item-rating span .fas.fa-star').removeClass('fas').addClass('far');
    let stars = button.attr('data-stars');
    for (let i = 0; i < stars; i++) {
        modal.find('.qw-modal__item-rating span .far.fa-star').first().removeClass('far').addClass('fas');
    };

})
$('#exampleModal').on('hidden.bs.modal', function (event) {
})

//бегунок:

$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 135,
        max: 700,
        values: [ 135, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $( "#modal-slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#modal-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#modal-amount" ).val( "$" + $( "#modal-slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#modal-slider-range" ).slider( "values", 1 ) );
} );
//для модалки:
$( function() {
    $( "#slider-range1" ).slider({
        range: true,
        min: 135,
        max: 700,
        values: [ 135, 500 ],
        slide: function( event, ui ) {
            $( "#amount1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount1" ).val( "$" + $( "#slider-range1" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range1" ).slider( "values", 1 ) );
    $( "#modal-slider-range1" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 300 ],
        slide: function( event, ui ) {
            $( "#modal-amount1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#modal-amount1" ).val( "$" + $( "#modal-slider-range1" ).slider( "values", 0 ) +
        " - $" + $( "#modal-slider-range1" ).slider( "values", 1 ) );
} );


// выделение категорий оранжевым цветом:

$(".filter__category").click(function(){
    $(this).toggleClass('orange-text');

    $(this).find(".filter__circle").toggleClass('orange-back')
});

$(".filter__tag").click(function () {
    $(this).toggleClass('orange-text')
    $(this).toggleClass('orange-border')
})



//Переключення табів в секції "Gallery".
const $tabsTitle = $('.gallery-tabs-title');
const $tabsContent = $('.gallery-tab');

$tabsTitle.click(function () {
    $(this).addClass('active')
    .siblings()
    .removeClass('active');
    $tabsContent.removeClass('active')
    .eq($(this).index())
    .addClass('active');
    $('.gallery-tab-img-wrapper.focus').removeClass('focus');
    $('.gallery-tab.active .gallery-tab-img-wrapper').first()
    .addClass('focus');
    showFullInfo();
});

//Карусель  в секції "Gallery".
(function () {
    showStars();
    showInfo();
}());

$('.gallery-tab-next-btn').click(function (event) {
    event.preventDefault();
    let $selectedItems = $('.gallery-tab.active .gallery-tab-img-wrapper.focus');
    if (($selectedItems.next()).length === 0) {
        $('.gallery-tab.active .gallery-tab-img-wrapper').first()
        .addClass('focus')
        .siblings()
        .removeClass('focus');
    } else {
        $selectedItems.next()
        .addClass('focus')
        .siblings()
        .removeClass('focus');
    };
    showFullInfo();
});

$('.gallery-tab-previous-btn').click(function (event) {
    event.preventDefault();
    let $selectedItems = $('.gallery-tab.active .gallery-tab-img-wrapper.focus');
    if (($selectedItems.prev()).length === 0) {
        $('.gallery-tab.active .gallery-tab-img-wrapper').last()
        .addClass('focus')
        .siblings()
        .removeClass('focus');
    } else {
        $selectedItems.prev()
        .addClass('focus')
        .siblings()
        .removeClass('focus');
    };
    showFullInfo();
});

$('.gallery-tab-img-wrapper').click(function (event) {
    $('.gallery-tab-img-wrapper').removeClass('focus');
    $(this).addClass('focus');
    showFullInfo();
});

function cleanStars() {
    $('.gallery-tab-text-stars .fas.fa-star').removeClass('fas').addClass('far');
};

function showStars() {
    let stars = $('.focus .gallery-tab-img').attr('data-stars');
    for (let i = 0; i < stars; i++) {
        $('.gallery-tab-text-stars .far.fa-star').first().removeClass('far').addClass('fas');
    };
};

function showInfo() {
    $('.gallery-tab-text-title').html(`${$('.focus .gallery-tab-img').attr('data-title')}`);
    $('.gallery-tab-text-price').html(`${$('.focus .gallery-tab-img').attr('data-price')}`);
    if($('.focus .gallery-tab-img').attr('data-old-price')) {
        $('.gallery-tab-price').css({'padding-top': '37px'});
        $('.gallery-tab-text-old-price').html(`${$('.focus .gallery-tab-img').attr('data-old-price')}`);
    } else {
        $('.gallery-tab-price').css({'padding-top': '48px'});
        $('.gallery-tab-text-old-price').html('');
    }
    $('.gallery-tab-big-img').attr('src', `${$('.focus .gallery-tab-img').attr('src')}`);
};

function showFullInfo() {
    cleanStars();
    showStars();
    showInfo();
};

//Включення тултипів
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
// Перевірка наявності товарів у кошику
document.addEventListener('DOMContentLoaded', (() => {
    if (!localStorage.getItem('items')) {
        localStorage.setItem('items', '0');
        localStorage.setItem('cart', '');
        $('.header-cart__amount').html(`${localStorage.getItem('items')}`);
    } else {
        $('.header-cart__amount').html(`${localStorage.getItem('items')}`);
    }
}));

// Додавання товарів до кошику з Gallery
$('.cart-add-btn').click(function () {
    localStorage.setItem('items', `${+localStorage.getItem('items') + 1}`);
    $('.header-cart__amount').html(`${localStorage.getItem('items')}`);
    const $addedItem = $('.focus .gallery-tab-img');
    localStorage.setItem('cart', [localStorage.getItem('cart') + $addedItem.attr('id') + ","]);
});

// Додавання товарів до кошику з Prodacts
$('.furniture__add-to-cart').click(function () {
    localStorage.setItem('items', `${+localStorage.getItem('items') + 1}`);
    $('.header-cart__amount').html(`${localStorage.getItem('items')}`);
    const $addedItem = $(this).prev();
    localStorage.setItem('cart', [localStorage.getItem('cart') + $addedItem.attr('id') + ","]);
});

// Прегляд товарів у кошику
$('.header-cart').click(function () {
    const inCart = document.querySelectorAll('div .modal-cart-info');
    inCart.forEach(elem => elem.remove());
    if (+localStorage.getItem('items')) {
        $('.modal-cart-empty').addClass('hide-cart');
        $('.modal-cart-help-div').css({ display: 'block' });
        let cartAmountItems = localStorage.getItem('cart').split(',');
        cartAmountItems.length -= 1;
        const modalCartTotalPrice = document.querySelector('.modal-cart-help-div');
        for (let i = 0; i < cartAmountItems.length; i++) {
            let $itemId = $(`#${cartAmountItems[i]}`);
            if ($itemId.attr('id') > 'item-020') {
                $itemId.attr('src', `${$itemId.attr('data-src')}`);
                $itemId.attr('data-title', `${$itemId.attr('data-name')}`);
                if ($itemId.attr('data-crossed')) {
                    $itemId.attr('data-old-price', `${$itemId.attr('data-crossed')}`);
                } else {
                    $itemId.attr('data-old-price', ``);
                };
            };
            const modalCartItem = document.createElement('div');
            modalCartItem.innerHTML = `<div class="modal-cart-info">
        <div class="modal-cart-info-img">
            <img src="${$itemId.attr('src')}">
        </div>
        <h4 class="modal-cart-info-title">${$itemId.attr('data-title')}</h4>
        <p class="modal-cart-info-old-price">${$itemId.attr('data-old-price')}</p>
        <p class="modal-cart-info-price">${$itemId.attr('data-price')}</p>
        <div class="modal-cart-info-sum">
            <p class="modal-cart-info-sum-text">Sum</p>
            <p class="modal-cart-info-sum-cash">
            ${$itemId.attr('data-price')}
            </p>
        </div>
        <div class="modal-cart-info-quantity">
            <p class="modal-cart-info-quantity-text">Quantity:</p>
            <p class="modal-cart-info-quantity-amount">1</p>
            <button class="modal-cart-info-quantity-btn">
                <i class="fas fa-minus"></i>
            </button>
            <button class="modal-cart-info-quantity-btn">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        </div>`;
            modalCartTotalPrice.before(modalCartItem);
        };
    };
});


