const Counter = artifacts.require("Counter");

contract("test counter contract", async (accounts) => {
  it("should use initial value of 77", async () => {
    const instance = await Counter.new(11);
    const value = await instance.get.call();
    assert.equal(value.toNumber(), 11);
  });

  it("should incrase value from 77 to 78", async () => {
    const instance = await Counter.new(22);
    await instance.increase();
    const value = await instance.get.call();
    assert.equal(value.toNumber(), 23);
  });

  it("should decrease value from 77 to 76", async () => {
    const instance = await Counter.new(33);
    await instance.decrease();
    const value = await instance.get.call();
    assert.equal(value.toNumber(), 32);
  });

  it("should set value to 3", async () => {
    const instance = await Counter.new(44);
    await instance.set(3);
    const value = await instance.get.call();
    assert.equal(value.toNumber(), 3);
  });
});
