// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items

const ItemManager = (function() {
    const items = [];
    return {
        add: function(item) {
            items.push(item);
        },
        remove: function(item) {
            items.splice(items.indexOf(item), 1);
        },
        list: function() {
            items.forEach(function(item) {
                console.log(item);
            });
        }
    };
})();

ItemManager.add('Item 1');
ItemManager.add('Item 2');
ItemManager.add('Item 3');
ItemManager.remove('Item 2');
ItemManager.list();
