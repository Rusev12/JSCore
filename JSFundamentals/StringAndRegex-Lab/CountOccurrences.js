function printCount(target , text) {
  var count = 0;
  var index = text.indexOf(target);

  while (index > -1){
      ++count;
      index = text.indexOf(target , ++index);
  }

    console.log(count)
}

printCount('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')