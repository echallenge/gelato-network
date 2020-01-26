import { internalTask } from "@nomiclabs/buidler/config";
import { utils } from "ethers";

export default internalTask(
  "gc-mint:defaultpayload:ConditionBalance",
  `Returns a hardcoded conditionPayloadWithSelector of ConditionBalance`
)
  .addFlag("log")
  .setAction(async ({ log }) => {
    try {
      const contractname = "ConditionBalance";
      // reached(address _coin, address _account, uint256 _refBalance)
      const functionname = "reached";
      // Params
      const { luis: account } = await run("bre-config", {
        addressbookcategory: "EOA"
      });
      const { DAI: coin } = await run("bre-config", {
        addressbookcategory: "erc20"
      });
      const refBalance = utils.parseUnits("162", 18);
      const greaterElseSmaller = false;
      const inputs = [account, coin, refBalance, greaterElseSmaller];
      // Encoding
      const payloadWithSelector = await run("abi-encode-withselector", {
        contractname,
        functionname,
        inputs,
        log
      });
      return payloadWithSelector;
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });