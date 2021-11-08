import {http} from './axios'
const prefix_member = 'member'
// const prefix_team = 'team'

/*
 @params memberName:string 小姐姐们的英文名 ava bella eileen carol diana
 @params pageIndex:string 当前页 可选
 @params pageNum:string 请求条数 可选
* */
export const experience = async (memberName,pageIndex,pageNum) => {
  const res = await http.get(`${prefix_member}/experience`, {params: {memberName,pageIndex,pageNum}})
  return res.data
}
