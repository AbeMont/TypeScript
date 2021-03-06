/// <reference path='fourslash.ts'/>

////declare class m3e { foo(): void } 
////module m3e { export var y = 2; }
////var /*1*/r = new m3e();
////r./*2*/
////var /*4*/r2 = m3e./*3*/

goTo.marker('1');
verify.quickInfoIs('var r: m3e');

goTo.marker('2');
verify.completionListContains('foo');

edit.insert('foo();');

goTo.marker('3');
verify.completionListContains('y');
edit.insert('y;');

goTo.marker('4');
verify.quickInfoIs('var r2: number');
