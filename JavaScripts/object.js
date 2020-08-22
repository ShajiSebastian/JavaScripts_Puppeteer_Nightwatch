let browser = {
    "name" : "chrome",
    "version" : 80,
    fun: () => {
        console.log('I eat RAM');
    }
}

browser.fun();
console.log(browser.name)


let names = [
    {
        "name" : "Shaji",
        "age"   : 35
    },
    {
        "name" : "Christo",
        "age"   : 7
    }
]

console.log(names[1].name)
console.table(names)
