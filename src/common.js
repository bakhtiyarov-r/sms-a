import $ from "jquery";
import PopperJs from 'popper.js';
import 'bootstrap';

function App() {
    
    let app = this;
    this.init = function() {
      
      this.stickyTitle();
      this.stickyControl();
      // this.toolTip();
    };


    
    this.toolTip = function() {
      function isTouchDevice(){
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }
      if (isTouchDevice()) {
        $(function() {
          $('.bid__descr span').click(function() {
            console.log('test')
          })
          $('.bid__descr span').tooltip({
            trigger: 'click',
          });
        });
      } else {
        $(function() {
          $('.bid__descr_ellpsis').click(function() {
            console.log('test')
          })
          $('.bid__descr_ellpsis').tooltip({
            trigger: 'click',
          });
        });
      }
      
      
    }
    
    this.getCoords = function(elem) {
        let box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset
        };
    }
    
    this.throttle = function(func, ms) {

        let isThrottled = false,
            savedArgs,
            savedThis;

        function wrapper() {

            if (isThrottled) {
              savedArgs = arguments;
              savedThis = this;
              return;
            }
            func.apply(this, arguments);

            isThrottled = true;

            setTimeout(function() {
              isThrottled = false;
              if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
              }
            }, ms);
        }

        return wrapper;
    }

    this.stickyTitle = function() {

        
        if (document.querySelector('.filter')) {
          let  panel = document.querySelector('.js-bids__head'),
               editPanelHeight = document.querySelector('.edit-panel').clientHeight,
               filterHeight= document.querySelector('.filter').clientHeight,
               panelTop = app.getCoords(panel).top - editPanelHeight;

          function stickyHead() {
              if ( window.pageYOffset >= (panelTop) ) {
                panel.classList.add('fixed');
                panel.style.top= window.pageYOffset - editPanelHeight - filterHeight - 1 + 'px';
              } else {
                panel.classList.remove('fixed');
              }
          }
          
          window.addEventListener('scroll', app.throttle(stickyHead, 1))
        }

    }

    this.stickyControl = function() {

      let controlPanel = document.querySelector('.control-panel');
      if (controlPanel) {
        let controlPanelTop = app.getCoords(controlPanel).top;
        
        if ( document.documentElement.clientHeight <= (controlPanelTop) ) {
          controlPanel.classList.add('fixed');
        } else {
          controlPanel.classList.remove('fixed');
        }
      }
        
        
    }
    
}

const app = new App();
app.init();    
