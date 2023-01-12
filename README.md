# Motoko_Simple_Calculator
What is Motoko programming language?
The Motoko programming language is a new, modern and type safe language for developers who want to build the next generation of distributed applications to run on the Internet Computer blockchain network. 
# Installation
 Refer Installation+and+Setup+for+Windows.pdf
# screen shorts
 ![calci](https://user-images.githubusercontent.com/80122325/211992486-57a5b214-c36f-4bba-aa0a-f248fc952bbb.png)
# simple Guid
 // output import
import Debug "mo:base/Debug";
// get time
import Time "mo:base/Time";
import Float "mo:base/Float"; 
import Text "mo:base/Text";
//create class
actor dapp{
  // stable var amount:Float = 300;

  //create variable
  // stable variable wont change when refresh
  // stable var number = 900; 
  // flexiable variable will cange in refresh 
  // var number: Float = 900;
  // stable var number_startime = Time.now();
  // Debug.print(debug_show(number_startime));
  // //reassign 
  // number := 100;
  // //print string
  // Debug.print("hello world");
  // //print number
  // Debug.print(debug_show(number));
  // //constant cant reasssign;
  // let pi = 3.14;
  // Debug.print(debug_show(pi));
  // create a function
  
  public func topup(num:Nat):async Text{
    if(num%2 == 0){
      return "Even"
    }else{
      return "Mot Evem"
    }
  };
  //dfx canister id __Candid_UI  http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai   dfx canister id app     call function in ui way
// call function in command line dfx canister call d_app_name  function_name

  //quick retrival of values
  // public query func history():async Float {
  //   amount+=1;
  //   return amount;
  // };
//  // calculate compound intrest per second
//   public func compound(){
//     let currrentTime = Time.now();
//     let timeElapsed_NS = currrentTime - number_startime;
//     let timeElapsed_S = timeElapsed_NS / 1000000000;
//     number:=number * (1.01 ** Float.fromInt(timeElapsed_S));
//     number_startime := currrentTime;
//   }

}
