function networkFetch(url) {
    return `${url} - Response server`
}

const cache = new Set()
const proxifedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} Response cahce`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxifedFetch('angular.io'))
console.log(proxifedFetch('angular.io'))
console.log(proxifedFetch('react.io'))