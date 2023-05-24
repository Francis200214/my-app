import Mock from 'mockjs'
import homeApi from './mockServeData/home'

Mock.mock('http://127.0.0.1:8080/api/home/getData', homeApi.get)

