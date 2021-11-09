myFunctions = {
  getName(shop){
  return shop.name;
  }, 
  getTotalCash(shop){
    return shop.admin.totalCash;
  },
  addOrRemoveCash (shop, amount) {
    shop.admin.totalCash += amount;
  },
  getPetsSold (shop){
    return shop.admin.petsSold;
  },
  increasePetsSold(shop, numb){
    shop.admin.petsSold += numb;
  },
  getStockCount(shop){
    return shop.pets.length;
  },
  getPetsByBreed(shop, breed){
    var count = 0;
    for (let pet of shop.pets){
      if(pet.breed === breed){
        count++
      }
    }
    return count;
  },
  getPetByName(shop, name){
    for (let pet of shop.pets){
      if (pet.name === name){
        return pet;
      }
    }
  },
  removePetByName(shop, name){
    for(var i = shop.pets.length-1; i >= 0; i--){
      if (shop.pets[i].name === name){
        shop.pets.splice (i,1);
      }
    }
    shop.petsSold--;
  },
  addPetToStock(shop, newPet){
    shop.pets.push(newPet);
  }, 
  getCustomersCash(customer){
    return customer.cash;
  }, 
  getCustomersCashTotal(customers){
    var total = 0;
    for (customer of customers){
      total += customer.cash;
    }
    return total;
  },
  removeCustomerCash(customer, amount){
   customer.cash -= amount;
  },
  getCustomerPetCount (customer){
    return customer.pets.length;
  },
  addPetToCustomer(customer, pet){
    customer.pets.push(pet);
  }



  
  

}
module.exports = myFunctions;
