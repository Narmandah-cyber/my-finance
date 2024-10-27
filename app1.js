
// var hunController = (function(){
//     // data encapsulation

//     //private data
//     var bodol = "It is hard to dive into more details of Javascript";

//     // private function
//     function guih(){

//     }
// })();



// delgetstei ajillah controller
var uiController = (function(){

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    };

    return{
        getInput : function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };
}
)();

//sanhuutei ajillah controller
var financeController = (function(){
    var y = 7;
})();

//programiin holbogch controller
var appController = (function(uiController,financeController){

    var controlAddItem = function(){
         //1. oruulah ugugdloog delgetsees olj avna.
         console.log(uiController.getInput());

        //2. olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna.

        //3. olj avsan ugugdluudiig web deeree tohiroh hesegt ni gargana.

        //4. tusviig tootsoolno.

        //5. etssiin uldegdel, tootsoog delgetsend gargana.
    };

    var setupEventListeners = function(){
        var DOM = uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click',function(){
            controlAddItem();
        });
    
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13  || event.which === 13){
                controlAddItem();
            } 
        });
    };

    return {
        init: function(){
            console.log('App started');
            setupEventListeners();
        }
    };
    
})(uiController,financeController);

appController.init();
