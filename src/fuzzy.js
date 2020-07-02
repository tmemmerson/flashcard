let fuzzyBear = new Object;
fuzzyBear.name = "Fuzzy Wuzzy";

fuzzyBear.introduction = function(){
  return 'Hello there, my name is ${this.name} and I would like to eat you.'
}

fuzzyBear.introduction();