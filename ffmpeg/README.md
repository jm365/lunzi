// 点开一个课程的列表页面，从 url 复制过来。  
export const course_id = 213711

// 课程的名称  
export const basePath = './xxxxx'

// 点击一个视频，进入播放状态，在控制台 network 找 detail 接口，里面有 accessToken  
export const accessToken = 'e52be4a731d744c194249f27ab6a4230'

// 列表接口 list 里面去 request header 里面找  
export const Authorization = 'Bearer pc:ca9c130b68c23245d43b6f867cd19a12'

// 随便一个接口 复制过来，把 cookie 里面的中文字符删除掉  
export const cookie = `gr_user_id=3ef07971-94ce-489f-8deb-e1d29d76a274; grwng_uid=dd4699fe-4f40-4399-8081-45cef151eb77; kd_user_id=afa0f7bf-bb9a-4251-b578-be435654e379; 99f53b614ce96c83_gr_last_sent_cs1=4880070; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1627482198; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%224880070%22%2C%22first_id%22%3A%2217a61ea345426d-0ae8f6a8b33c308-3e604809-2073600-17a61ea3455210%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a61ea345426d-0ae8f6a8b33c308-3e604809-2073600-17a61ea3455210%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgwZTFkYjRlMzE0MmYtMGUxNjhmZmE2MTlmYzgtM2U2MDQ4MDktMjA3MzYwMC0xODBlMWRiNGUzMmIxNCIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjQ4ODAwNzAifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%224880070%22%7D%7D; access-edu_online=ca9c130b68c23245d43b6f867cd19a12; 99f53b614ce96c83_gr_session_id=7bfce083-2c04-4114-afc1-1630ef25fed0; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=7bfce083-2c04-4114-afc1-1630ef25fed0; 99f53b614ce96c83_gr_session_id_7bfce083-2c04-4114-afc1-1630ef25fed0=true; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=GfL10OwYiqYxSfgwYgv%3Af8c04df9-974c-4a2f-993b-510353bf36f5%3A773e3709-6ddf-4914-ac10-07d96ca79125; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=EPRltZsjoOELlYsgAcS; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=0; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1654914566707; 99f53b614ce96c83_gr_cs1=4880070; kkb_edu_session=eyJpdiI6InpFUU1cL01oK2hxNTQyNFZHQ25hcFJ3PT0iLCJ2YWx1ZSI6Ijc4NW1cLzZ1aEZ0ZUJlMkhValg5TlJtT1RPQnFQeDRkcm5COUNpcHdQSWJcLzhTQkZXamVPcVQ4M2xrQk9lMmg4KyIsIm1hYyI6IjdhNDU5MDBjZDhmNzM3ZjIzNGNmM2Q3ZDBmYjRkZjA4Y2RiYzhiNzQxMTRiNzJhNmU5ZDEwYTllNDk1OTQxMTcifQ%3D%3D`

// 固定  
export const courseUrl = `https://weblearn.kaikeba.com/student/courseinfo?course_id=${course_id}&__timestamp=1653898285046`  
export const chapterUrl = `https://weblearn.kaikeba.com/student/chapterinfo?course_id=${course_id}&chapter_id=`  
export const mediaUrl ='https://api-vod.baoshiyun.com/vod/v1/platform/media/detail'
