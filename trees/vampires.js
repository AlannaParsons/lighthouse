class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVamp = this;

    while (currentVamp.creator){
      currentVamp = currentVamp.creator;
      count++;
    }

    return count;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
   return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;

  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    let currentVampA = this;

    while (vampire.creator){

      while(currentVampA.creator){
        console.log(vampire.name,' (V)created by:', vampire.creator.name)
        console.log("conamparing")
        console.log(currentVampA.name,' *(A)created by:', currentVampA.creator.name)
        if (vampire.creator === currentVampA.creator){
          return vampire.creator.name;
        }
        currentVampA = currentVampA.creator;
      }
      vampire = vampire.creator;
      currentVampA = this;
    }
    return 'whats';
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

console.log('TESTS');

const craig    = new Vampire("Craig", 1222);
const arvinder = new Vampire("Arvinder", 1999);
const angela   = new Vampire("Angela", 2000);
const phil     = new Vampire("Phil", 2022);
const nandy    = new Vampire("nandy", 2033);
const lazlo    = new Vampire("lazlo", 2044);
const naja     = new Vampire("naja", 2055);
const collinRobinson     = new Vampire("collinRobinson", 2066);

craig.addOffspring(arvinder);
craig.addOffspring(angela);
craig.addOffspring(phil);
phil.addOffspring(nandy);
phil.addOffspring(lazlo);
angela.addOffspring(naja);
nandy.addOffspring(collinRobinson)

console.log('\nnumber of offspring');
console.log('craig:',craig.numberOfOffspring,', phil:', phil.numberOfOffspring,', CR:',collinRobinson.numberOfOffspring);
console.log('\nnumber from OG');
console.log('craig:',craig.numberOfVampiresFromOriginal,', phil:', phil.numberOfVampiresFromOriginal,', CR:',collinRobinson.numberOfVampiresFromOriginal);
console.log('\nisMoreSeniorThan(vampire)')
console.log('T:',craig.isMoreSeniorThan(naja),', T:', angela.isMoreSeniorThan(collinRobinson),', F:',collinRobinson.isMoreSeniorThan(phil),', F:',lazlo.isMoreSeniorThan(naja));
console.log('\nclosestCommonAncestor(vampire)');
console.log('phil:',nandy.closestCommonAncestor(lazlo), 'phil:', lazlo.closestCommonAncestor(collinRobinson))
//', T:', angela.closestCommonAncestor(collinRobinson),', F:',collinRobinson.closestCommonAncestor(phil),', F:',lazlo.closestCommonAncestor(naja));