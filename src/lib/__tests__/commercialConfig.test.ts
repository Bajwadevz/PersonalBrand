import { commercialConfig, verifyFoundingPrices, ALLOWED_OFFER_IDS } from "../commercialConfig";

// Run validation check
const { valid, mismatches } = verifyFoundingPrices();

if (!valid) {
  console.error("FAIL: Commercial configuration 50% discount validation failed!");
  console.error(mismatches);
  process.exit(1);
} else {
  console.log("SUCCESS: All 50% early customer prices match standard prices exactly.");
}

console.log(`Verified ${Object.keys(commercialConfig.offers).length} commercial offers.`);
console.log(`Allowed offer contact IDs (${ALLOWED_OFFER_IDS.length}):`, ALLOWED_OFFER_IDS.join(", "));
