import Mock from 'mockjs'
imp

Mock.mock('http://127.0.0.1:8080/api/home/getData', function () {
    console.log('mock拦截')
    return 1
})

