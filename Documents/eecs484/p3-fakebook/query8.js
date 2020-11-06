// query 8: Find the city average friend count per user using MapReduce
// Using the same terminology in query7, we are asking you to write the mapper,
// reducer and finalizer to find the average friend count for each city.


var city_average_friendcount_mapper = function() {
  // implement the Map function of average friend count
};

var city_average_friendcount_reducer = function(key, values) {
  // implement the reduce function of average friend count
};

var city_average_friendcount_finalizer = function(key, reduceVal) {
  // We've implemented a simple forwarding finalize function. This implementation 
  // is naive: it just forwards the reduceVal to the output collection.
  // You will need to change it for this query to work
  var ret = reduceVal;
  return ret;
}
