import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Float "mo:base/Float";
actor dapp{
  public func add(a:Int,b:Int):async Int{
    var  sum = a+b;
    return sum;
  };
  public func sub(a:Int,b:Int):async Int{
    var sub = a-b;
    return sub;
  };
  public func mul(a:Nat,b:Nat):async Nat{
    return a*b;
  };
  public func div(a:Float,b:Float):async Float{
    return a/b;
  };
  public func mod(a:Float,b:Float):async Float{
    return a%b;
  }
}