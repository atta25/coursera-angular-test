(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.buy = function (itemIndex) {
            ShoppingListCheckOffService.buy(itemIndex);
            toBuy.toBuyEmptyList = ShoppingListCheckOffService.isEmptyToBuyList();
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.purchasedItems = ShoppingListCheckOffService.getPurchasedItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [{ name: "cookies", quantity: "10" },
                          { name: "muffins", quantity: "5" },
                          { name: "candies", quantity: "7" },
                          { name: "chocolates", quantity: "10" },
                          { name: "lollipops", quantity: "6" }];

        var purchasedItems = []

        service.buy = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            purchasedItems.push(item);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getPurchasedItems = function () {
            return purchasedItems;
        };

        service.isEmptyToBuyList = function () {
            return itemsToBuy.length === 0;
        }
    }
})();