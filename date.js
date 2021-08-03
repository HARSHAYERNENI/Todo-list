//jshint esversion:6

exports.getDate = function()
{
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
   return today.toLocaleDateString("en-us",options);
};
module.exports.getDay = function ()
{
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return day = today.toLocaleDateString("en-us",options);

};
