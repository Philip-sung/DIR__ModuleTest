type Connector = {
  get: (path: string) => Promise<unknown>;
};

class SampleHttpClient {
  #connector: Connector;

  public httpClientId = 1;

  constructor(connector: Connector) {
    this.#connector = connector;
  }

  public get GET() {
    return {
      sayHi: () => console.log("HI"),
      sayBye: () => console.log("Bye"),
    };
  }
}

const connector = { get: async (path: string) => console.log("Connector") };
const httpClient = new SampleHttpClient(connector);

console.log("***************************");
console.log("Basic Http Client Usage");
httpClient.GET.sayHi();
console.log("");
console.log(`http Client ID : ${httpClient.httpClientId}`);
console.log("");
httpClient.GET.sayBye();
console.log("***************************");
console.log("");
console.log("");

const createProxy = (target: any): any => {
  return new Proxy(target, proxyHandler);
};

const proxyHandler = {
  get: (obj: any, prop: any) => {
    if (typeof obj[prop] === "function") {
      console.log(`Accessed to method ${prop}`);
    } else {
      console.log(`Accessed to property ${prop}`);
    }

    return obj[prop];
  },
};

const httpClientProxy = createProxy(httpClient);
console.log("***************************");
console.log("Using 1-depth basic proxy");
httpClientProxy.GET.sayHi();
console.log("");
console.log(httpClientProxy.httpClientId);
console.log("");
httpClientProxy.GET.sayBye();
console.log("***************************");
console.log("");
console.log("");

const createTwoDepthProxy = (target: any): any => {
  return new Proxy(target, nestedChainingHandler);
};

const nestedChainingHandler = {
  get: function (obj: any, prop: any) {
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      return new Proxy(obj[prop], {
        get(innerObj, innerProp) {
          console.log(`Accessing nested property ${String(innerProp)}`);
          if (typeof innerObj[innerProp] === "function") {
            innerObj[innerProp]();
            innerObj[innerProp]();
          }
          return innerObj[innerProp];
        },
        set(innerObj, innerProp, newValue) {
          console.log(
            `Setting nested property ${String(innerProp)} to ${newValue}`
          );
          innerObj[innerProp] = newValue;
          return true;
        },
      });
    }

    if (typeof obj[prop] === "function") {
      console.log(`Method ${String(prop)} accessed.`);
    } else {
      console.log(`Property ${String(prop)} accessed.`);
    }
    return obj[prop];
  },
};

const httpClientDepthProxy = createTwoDepthProxy(httpClient);
console.log("***************************");
console.log("Use doubled function proxy");
httpClientDepthProxy.GET.sayHi();
console.log("");
console.log(httpClientDepthProxy.httpClientId);
console.log("");
httpClientDepthProxy.GET.sayBye();
console.log("***************************");
console.log("");
console.log("");

//성능 테스트
// const iterations = 10000;

// let directAccessStartTime: number, directAccessEndTime: number;
// let proxyAccessStartTime: number, proxyAccessEndTime: number;

// directAccessStartTime = performance.now();
// for (let i = 0; i < iterations; i++) {
//   httpClient.GET.sayHi();
//   httpClient.GET.sayBye();
//   httpClient.httpClientId;
// }
// directAccessEndTime = performance.now();

// proxyAccessStartTime = performance.now();
// for (let i = 0; i < iterations; i++) {
//   httpClientDepthProxy.GET.sayHi();
//   httpClientDepthProxy.GET.sayBye();
//   httpClientDepthProxy.httpClientId;
// }
// proxyAccessEndTime = performance.now();

// // 결과 출력
// console.log("***************************");
// console.log("Performance Results");
// console.log(
//   `Direct access: ${(directAccessEndTime - directAccessStartTime).toFixed(
//     2
//   )} ms`
// );
// console.log(
//   `Proxy access: ${(proxyAccessEndTime - proxyAccessStartTime).toFixed(2)} ms`
// );
// console.log("***************************");
