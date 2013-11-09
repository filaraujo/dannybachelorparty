(function(){


    $('body')
        .on('mouseover', '.agenda-event-actions', function(){
            var iframe = $(this).parents('.agenda-event').find('iframe'),
                src = iframe.attr('src');

            if(!src){
                iframe.attr('src', iframe.data('src'));
            }
        })
        .on('click', 'button[title="view map"]', function(){
            $(this).parents('.agenda-event').addClass('is-exposed');
        })
        .on('click', 'button[title="close map"]', function(){
            $(this).parents('.agenda-event').removeClass('is-exposed');
        });

}());