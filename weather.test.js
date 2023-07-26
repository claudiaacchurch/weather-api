const weather = require("./weather");

describe("testing weather unit tests", () => {
  it("tests loads city into the object", () => {
    mockClient = {
      fetchWeatherData: () => {
        return { main: { temp: 20 } };
      },
    };
    weatherClass = new weather(mockClient);
    weatherClass.load('London');
    response = weatherClass.data.main.temp;
    expect(response).toEqual(20);
  });

  it("getWeatherData prints formatted data", () => {
    mockClient = {
      fetchWeatherData: () => {
        return { main: { temp: 20 }, name: 'London'};
      },
    };
    weatherClass = new weather(mockClient);
    weatherClass.load('London');
    response = weatherClass.getWeatherData();
    expect(response).toEqual("Name: London, Temperature: 20");
  });
});
