let pronouns = ["the", "our", "my"];
let adjs = ["great", "big", "fancy"];
let nouns = ["jogger", "racoon", "flower"];
let sites = [".com", ".net", ".gov"];

var chosenPronoun = "";
var chosenAdj = "";
var chosenNoun = "";
var chosenSite = "";

for (let pn in pronouns) {
  chosenPronoun = pronouns[pn];
  for (let ad in adjs) {
    chosenAdj = adjs[ad];
    for (let n in nouns) {
      chosenNoun = nouns[n];
      for (let s in sites) {
        chosenSite = sites[s];

        console.log(`${chosenPronoun}${chosenAdj}${chosenNoun}${chosenSite}`);
      }
    }
  }
}
