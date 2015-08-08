angular.module('starter.services', ['ng-cordova'])

.factory('Items', function () {

  var _items = [];

  return {
    all: function () {
      return _items;
    },

    get: function (id) {
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].id === parseInt(id)) {
          return _items[i];
        }
      }
    },

    remove: function (item) {
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].id === item.id) {
          return _items.splice(i, 1);
        }
      }
    }
  };

})

.factory('Categories', function () {

  var _categories = [{
    id: 1,
    category_name: 'Home'
  }, {
    id: 2,
    category_name: 'School'
  }, {
    id: 3,
    category_name: 'Work'
  }, {
    id: 4,
    category_name: 'Shopping List'
  }];

  return {
    all: function () {
      return _categories;
    },

    get: function (id) {
      for (var i = 0; i < _categories.length; i++) {
        if (_categories[i].id === parseInt(id)) {
          return _categories[i];
        }
      }
    },

    remove: function (category) {
      for (var i = 0; i < _categories.length; i++) {
        if (_categories[i].id === category.id) {
          return _categories.splice(i, 1);
        }
      }
    }
  };
  
});

//
// .factory('Database', function($window, $cordovaSQLite) {
//   // Might use a resource here that returns a JSON array
//   var _db;
//
//   // Some fake testing data
//
//   return {
//     load: function (onSuccess, onError) {
//
//       if ($window.cordova) {
//
//         $window.plugins.sqlDB.copy('populated.db', function (success) {
//           _db = $cordovaSQLite.openDB('populated.db');
//           if (onSuccess) { onSuccess(_db); }
//         }, function (error) {
//           if (onError) { onError(error); }
//         });
//
//       } else {
//
//         _db = openDatabase('websql.db', '1.0', 'MyWebSQLDB', 2 * 1024 * 1024);
//         _db.transaction(function (tx) {
//           tx.executeSql('DROP TABLE IF EXISTS tblCategories');
//           tx.executeSql('CREATE TABLE IF NOT EXISTS tblCategories (id integer primary key, category_name text)');
//           tx.executeSql('CREATE TABLE IF NOT EXISTS tblItems (id integer primary key, category_id integer, title text)');
//           tx.executeSql('INSERT INTO tblCategories (category_name) VALUES (?) ["Home"]');
//           tx.executeSql('INSERT INTO tblCategories (category_name) VALUES (?) ["Work"]');
//           tx.executeSql('INSERT INTO tblCategories (category_name) VALUES (?) ["School"]');
//           tx.executeSql('INSERT INTO tblCategories (category_name) VALUES (?) ["Shopping List"]');
//         });
//
//         if (onSuccess) { onSuccess(_db); }
//
//       }
//     },
//
//     get: function() {
//       return _db;
//     },
//
//     query: function (query) {
//       return $cordovaSQLite.execute(_db, query, []);
//     }
//   };
// });
