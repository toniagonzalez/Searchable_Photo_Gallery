const $message = $(".message");
$message.hide();
// activates lightbox plug-in

lightbox.option({
  'wrapAround': true,
  'disableScrolling': true,
});

// variables
const $inputBar = $(".bar");
let $entry;
$message.hide();

//-----------function for Search Bar

//----alert inuput bar
$inputBar.on('keyup', function(){

    //-------variables
    const $inputBar = $(".bar");
    const $link = $("#gallery a");
    $entry = $inputBar[0].value.toLowerCase();
    var i;
    let $photoCaption;
    let $hide = 0;
    const $message = $(".message");

    //----cycles through link photo captions & compares to entry value
    for ( var i = 0; i < $link.length; i++) {
        //-------variables
        $photoCaption = $($link[i]).attr('data-title').toLowerCase();
        const $gallery = $($(".photo")[i]);
        //------- reset gallery on clearing of input bar
        $gallery.show();
        $message.hide();
        //--- if match show photos
        if ($photoCaption.includes($entry)){
            $gallery.show();
        }  else {
        //--- if not match hide photos
            $gallery.hide();
            $hide += 1;
        }
    }
    // ---if no matches show message
    if ($hide > 11) {
        $message.show();
    }
});
