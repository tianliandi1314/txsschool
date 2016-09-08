/* 
* @Author: Peter
* @Date:   2016-08-31 23:43:20
* @Last Modified by:   Peter
* @Last Modified time: 2016-09-01 00:00:03
*/




class Navigate {
    constructor(){
        this.curPage = 1;
        this.numOfPages = $('.LovePage').length;
        this.animTime = 1000;
        this.scrolling = false;
        this.pgPrefix = '.LovePage-';
        this.pgArrow_bool = true;
        this.addEvent();
    }

    pagination() {
        this.scrolling = true;
        $(this.pgPrefix + this.curPage).removeClass('inactive').addClass('active');
        $(this.pgPrefix + (this.curPage - 1)).addClass('inactive');
        $(this.pgPrefix + (this.curPage + 1)).removeClass('active');
        setTimeout(()=>{
            this.scrolling = false;
        }, this.animTime);
    }
    
    navigate(){
        console.log(this.curPage)
        this.pgArrow_bool ? (this.curPage === this.numOfPages ? this.curPage : this.curPage++) : (this.curPage === 1 ? this.curPage : this.curPage--);
        console.log(this.curPage)
        this.pagination();
    }
    addEvent(){
        $(document).on('mousewheel DOMMouseScroll', (e)=> {
        if (this.scrolling)
            return;
        if (e.wheelDelta > 0 || e.detail < 0) {
            this.pgArrow_bool = false;
        } else {
            this.pgArrow_bool = true;
        }
        this.navigate();
        });
        $(document).on('keydown', (e)=> {
            if (this.scrolling)
                return;
            if (e.which === 38) {
                this.navigateUp();
            } else if (e.which === 40) {
                this.navigateDown();
            }
        });
    }
}

$(document).ready(function(){
    new Navigate();
});