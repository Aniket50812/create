// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

function start_with_py(str) {
    if(str.startsWith("Py")){
        return str;
    }
    else{
        return "Py"+str;
    }
}

console.log(start_with_py("Python"));
console.log(start_with_py("thon"));
console.log(start_with_py("jython"));
