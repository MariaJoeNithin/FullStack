const obj1={i:10,j:20}
// document.write(obj1.i,"&nbsp;",obj1.j);
// document.write("<br>",typeof(obj1))
// document.write("<br>",obj1["i"]);
const obj2={
    name1:'hai',
    obj3:{
        a:5,b:15,
    }
}

// document.write("<br>", obj2)

console.log(obj2)

const batch = {
    name:'OFSD23C',count:20,disp:function()
    {
      // document.write('<br> This is OFSD23C')
      console.log(' This is OFSD23C')
    }
};

batch.disp();
//constructor
function hell(){
    this.name = "darren_caffee", this.age = 21

};

const copy = new hell();
const copy_two = new hell();
const copy_three = new hell();

console.log(copy.name)
console.log(copy_two.age)
console.log(copy_three.type)
// document.write(copy.name)
// document.write(copy_two.age)
// document.write(copy_three.type)


/* 
    Objects  technical questions

    object different data type value stored
     object types -constructor (its based on another object name),literal method(.plus keyword)
     property - keyvalue
     squarebracket also use in keyvalue with use [""]
     computer propertiesS
     let f = prompt('which fruit to buy', 'apple');
     let bag = {[f]:5,};
     console.log(bag.apple);
     this no limit for the keyvalue number or alpha lettersS */


    /* for in loop  
      const batch = {
        name = 'of'
        count: 20;
      }
      for (let x in batch)
      {
        console.log(x);
        console.log(batch[x])
      }
    
      */

    // Object reference(direct value is not have only address) and copying 
    // cloneing- object can not change property can be changed 
    // structure clone-dont change
    /* const a {
         x : 1;
         y :2;         
     }
      
    let b = structuredClone.(a) */
    /* shadow copy - reference
      real copy-  object  */

      /* merge
      const a={x:1};
      const b={y:2};
      const c={z:3};
      object.assign(a,b,c);
      console.log(a.z) //3      
       */

       /* nested onject
      
       const a = { name=: xxx
                  id : 223
                 score :{
                  mark1: 323
                  mark2:33
                 }}
                
                b=a
                if (b.score.mark1 ==== a.score.mark2)//true              
              */
              /* garbage -unnecessary memory cleaing
                a = 10; -garbage
                a =5;
                 default access in js */

                 /* this.(pointer)
                 its a keyword current object call
                 its work on runtime
                 its used local and global 
                 this only call reference
                 */

                 /* Optional chaining property /chaining shortcut. t/f
                    const a {
                      x = 1;

                    }
                    using dot operator
                    console.log(a?.X?.c)
                     */