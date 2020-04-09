// running `npx buidler test` automatically makes use of buidler-waffle plugin
// => only dependency we need is "chai"
const { expect } = require("chai");

// GelatoSysAdmin creation time variable values
import initialState from "./GelatoSysAdmin.initialState";

describe("GelatoCore - GelatoSysAdmin - Setters: FEES", function () {
  // We define the ContractFactory and Signer variables here and assign them in
  // a beforeEach hook.
  let GelatoCore;
  let gelatoCore;
  let owner;
  let notOwner;

  beforeEach(async function () {
    // Get the ContractFactory, contract instance, and Signers here.
    GelatoCore = await ethers.getContractFactory("GelatoCore");
    gelatoCore = await GelatoCore.deploy();
    await gelatoCore.deployed();
    [owner, notOwner] = await ethers.getSigners();
  });

  // We test different functionality of the contract as normal Mocha tests.

  // setExecClaimTenancy
  describe("GelatoCore.GelatoSysAdmin.setExecClaimTenancy", function () {
    it("Should let the owner setExecClaimTenancy", async function () {
      // Every transaction and call is sent with the owner by default
      await expect(gelatoCore.setExecClaimTenancy(69420))
        .to.emit(gelatoCore, "LogSetExecClaimTenancy")
        .withArgs(initialState.execClaimTenancy, 69420);

      expect(await gelatoCore.execClaimTenancy()).to.be.equal(69420);
    });

    it("Should NOT let non-Owners setExecClaimTenancy", async function () {
      // gelatoCore.connect returns the same GelatoCore contract instance,
      // but associated to a different signer
      await expect(
        gelatoCore.connect(notOwner).setExecClaimTenancy(69420)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  // setExecClaimRent
  describe("GelatoCore.GelatoSysAdmin.setExecClaimRent", function () {
    it("Should let the owner setExecClaimRent", async function () {
      // Every transaction and call is sent with the owner by default
      await expect(gelatoCore.setExecClaimRent(69420))
        .to.emit(gelatoCore, "LogSetExecClaimRent")
        .withArgs(initialState.execClaimRent, 69420);

      expect(await gelatoCore.execClaimRent()).to.be.equal(69420);
    });

    it("Should NOT let non-Owners setExecClaimRent", async function () {
      // gelatoCore.connect returns the same GelatoCore contract instance,
      // but associated to a different signer
      await expect(
        gelatoCore.connect(notOwner).setExecClaimRent(69420)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  // setExecutorSuccessShare
  describe("GelatoCore.GelatoSysAdmin.setExecutorSuccessShare", function () {
    it("Should let the owner setExecutorSuccessShare", async function () {
      // Every transaction and call is sent with the owner by default
      await expect(gelatoCore.setExecutorSuccessShare(69420))
        .to.emit(gelatoCore, "LogSetExecutorSuccessShare")
        .withArgs(initialState.executorSuccessShare, 69420);

      expect(await gelatoCore.executorSuccessShare()).to.be.equal(69420);
    });

    it("Should NOT let non-Owners setExecutorSuccessShare", async function () {
      // gelatoCore.connect returns the same GelatoCore contract instance,
      // but associated to a different signer
      await expect(
        gelatoCore.connect(notOwner).setExecutorSuccessShare(69420)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  // setSysAdminSuccessShare
  describe("GelatoCore.GelatoSysAdmin.setSysAdminSuccessShare", function () {
    it("Should let the owner setSysAdminSuccessShare", async function () {
      // Every transaction and call is sent with the owner by default
      await expect(gelatoCore.setSysAdminSuccessShare(69420))
        .to.emit(gelatoCore, "LogSetSysAdminSuccessShare")
        .withArgs(initialState.sysAdminSuccessShare, 69420);

      expect(await gelatoCore.sysAdminSuccessShare()).to.be.equal(69420);
    });

    it("Should NOT let non-Owners setSysAdminSuccessShare", async function () {
      // gelatoCore.connect returns the same GelatoCore contract instance,
      // but associated to a different signer
      await expect(
        gelatoCore.connect(notOwner).setSysAdminSuccessShare(69420)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
