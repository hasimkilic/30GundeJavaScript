// Callback 

console.log('Start')
//Burada bilgileri tanımlarız 3.paramere olarak callback fonksiyonunu göndeririz setTimeOut fonksiyonu içinde bu
// fonksiyonu çağırırız.
const login =  (username,password,callback) => {
    setTimeout(()=>{
        callback({username:username,password:password})
    },2000)
}

const getPostsByUsername = (username,callback)=>{
    setTimeout(()=>{
        callback(['Post 1','post2','post3'])
    },2000)
}
//Bu kısımda ise login methodunu tanımlarız
login('hasimkilic','12345',user => {
    console.log(user);
    console.log('end')

    getPostsByUsername(user.username , (posts)=> {
        console.log(posts)
    })
})





