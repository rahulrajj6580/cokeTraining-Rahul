function foo(a,b){
    console.log(this) ;
    const outer = this;
    // function inner(){
    //     console.log(outer)
    // }
    inner =() => {
        console.log(outer);
    }
    inner();
}

const cts ={}
cts.foo = foo;
cts.foo();


// console.log('---------------')
// // foo();

// const customConntext = {name: 'rahul'};
// // foo.apply(customConntext,[8,9])
// foo.call(customConntext,8,9,10)
