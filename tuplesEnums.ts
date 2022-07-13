// let myTupel: [number, string];

// const colorful: number[] = [23, 43, 54, 645, 56]
const colorful: [number, number, number] = [244, 543, 344];

type HTTPResponse = [number, string];

let goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = "eddie"
// goodRes.push("eddie"); // weird anomaly where TS lets you add after the fact

const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "Not Found"],
];

// objects may be preferred over tuples

// ENUM is a set of named constants

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(myStatus: OrderStatus) {
  return myStatus === OrderStatus.DELIVERED;
}
