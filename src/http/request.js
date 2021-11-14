import {http} from './axios'
const prefix_member = 'member'
const prefix_team = 'team'

/*
 @params memberName:string 小姐姐们的英文名 ava bella eileen carol diana
 @params pageIndex:string 当前页 可选
 @params pageNum:string 请求条数 可选
* */
export const experience = async (memberName,pageIndex,pageNum) => {
  const res = await http.get(`${prefix_member}/experience`, {params: {memberName,pageIndex,pageNum}})
  return res.data
}

/**
 * 头部轮播图获取接口 参数为当前时间的字符串
 * @param date
 * @return {Promise<any>}
 */
export const getBannerPic = async (date) => {
  const res = await http.get(`/headpicture`, {params: {date}})
  return res.data
}

export const getMilePosts = async (pageIndex,pageSize,year) => {
  const res = await http.get(`${prefix_member}/mileposts`, {params: {pageIndex,pageSize,year}})
  return res.data
}

export const getMemberVideos = async (memberName) => {
  const res = await http.get(`${prefix_member}/videos`, {params: {memberName}})
  return res.data
}

export const getMemberList = async (date) => {
  const res = await http.get(`${prefix_member}/memberlist`, {params: {date}})
  return res
}


export const getTeamVideos = async (pageIndex, pageSize) => {
  const res = await http.get(`${prefix_team}/videos`, {params: {pageIndex,pageSize}})
  return res.data
}

export const getTeamEvents = async (pageIndex, pageNum,year) => {
  const res = await http.get(`${prefix_team}/events`, {params: {pageIndex,pageNum,year}})
  return res.data
}




