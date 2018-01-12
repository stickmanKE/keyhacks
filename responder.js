$(function() {
  class Key {
    constructor(responder, callback, toggle) {
      try {
        if(typeof responder === "number" ) {
          this.responseKey = responder;
        } else {
          throw '[Key Responder] parameter (1) is not of type \'number\'.';
        }
        if(typeof callback === "function" ) {
          this.callback = callback;
        } else {
          throw '[Key Responder] parameter (2) is not of type \'function\'.';
        }
        if(typeof toggle === "boolean" ) {
          this.isToggle = toggle;
        } else {
          throw '[Key Responder] parameter (3) is not of type \'Boolean\'.';
        }
      }
      catch(e) {
        console.log('Error : ' + e);
      }
      finally {
        this.toggle=false;
        console.log('[!] Key Responder Made with '+String.fromCodePoint(0x2764)+' by Xploit @Hackedarcadegames.com [!]');
        if(this.responseKey!=null && this.responseKey!='undefined') {
          if(this.callback!=null && this.callback!='undefined') {
            console.log('A Responder for key code '+ this.responseKey +' has been initiated');
            $(window).on('keyup', function(e) {
              if(e.which===parseInt(this.responseKey)||e.keyCode===parseInt(this.responseKey)) {
                this.callback();
              }
            });
          }
        }
      }
    }
      toggle() {
        try {
          if(this.isToggle) {
            this.toggle = this.toggle != this.toggle;
            if(this.toggle) {
              let time = setInterval(this.callback, 500);
            } else {
              clearInterval(time);
            }
          } else {
            throw 'You are trying to toggle a key which has not been set to be a toggle.'
          }
        } catch(e) {
          console.log('[Key Responder] ' + e)
        }
      }
  }

function logme() {
  console.log("im runnin hoe");
}

let toggleHealth = new Key(49, logme, false);



});
