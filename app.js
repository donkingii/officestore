(function () {
    
    var app = angular.module('eStore', []);

    app.controller('GalleryController', function () {
        this.current = 0;

        this.setCurrent = function (current2) {
            this.current = current2 || 0;
        };

    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.controller('StoreController', function () {
        this.products = items;
    });

    //app.controller('StoreController', ['$http', function ($http) {
    //    var store = this;
    //    store.products = [];

    //    $http.get('/store-products.json').success(function (data) {
    //        store.products = data;
    //    });
    //}]);

    app.controller('TabController', function () {
        this.tab = 1;
        this.setTab = function (tabSet) {
            this.tab = tabSet;
        };
        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        };

    });

    var items = [
    {
        "name": "Pen",
        "description": "This pen comes in black and is sold by the box. 10 per box.",

        "price": 2.95,



        "images": [
            
        ],
        "reviews": []
    },

    {
        "name": "Pencil",
        "description": "These are #2 pencils sold 10 per box.",

        "price": 1.89,



        "images": [
            
        ],
        "reviews": []
    },

    {
        "name": "Paper",
        "description": "White, 8x11 paper. 500 pages per ream.",

        "price": 4.99,



        "images": [
          
        ],
        "reviews": []
    },

    {
        "name": "Highlighter",
        "description": "Comes in bright yellow. 5 per pack.",

        "price": 3.99,



        "images": [

        ],
        "reviews": []
    }
    ];
})();