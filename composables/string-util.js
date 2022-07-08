export function getCamelCaseArray(camel) {
  var reg = /([a-z0-9])([A-Z])/g;
  return camel.replace(reg, "$1 $2");
}
