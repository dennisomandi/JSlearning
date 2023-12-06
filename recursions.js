// A recursive function is a function that calls itself somewhere within the body of the function. //

function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return
    }
    console.log("I'm doing something.")
    doSomething(n - 1)
  }
  doSomething(3)