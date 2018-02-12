// Your code goes here:
let turnbig = function (event) {

jQuery(this).attr("id", this.id + "main-image")
jQuery(this).attr('style', "width: 300px")
jQuery(this).attr('width', 300)
jQuery(this).attr('height', 450)

}

jQuery ('#thumbnails img').on("click", turnbig)
