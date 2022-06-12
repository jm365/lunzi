import fs from 'fs'
import path from 'path'
import axios from 'axios'
(async function () {
  const checkPath = async function (path) {
    try {
      await fs.promises.access(path)
    } catch {
      fs.mkdirSync(path)
    }
    return true
  }

  const basePath = './video'
  await checkPath(basePath)


  const config = {
    headers:
    {
      Authorization: 'Bearer pc:5e0e93b6722769bbe7c1b361ffb09083',
      cookie: 'gr_user_id=3ef07971-94ce-489f-8deb-e1d29d76a274; grwng_uid=dd4699fe-4f40-4399-8081-45cef151eb77; kd_user_id=afa0f7bf-bb9a-4251-b578-be435654e379; 99f53b614ce96c83_gr_last_sent_cs1=4880070; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%224880070%22%2C%22first_id%22%3A%2217a61ea345426d-0ae8f6a8b33c308-3e604809-2073600-17a61ea3455210%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a61ea345426d-0ae8f6a8b33c308-3e604809-2073600-17a61ea3455210%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgwZTFkYjRlMzE0MmYtMGUxNjhmZmE2MTlmYzgtM2U2MDQ4MDktMjA3MzYwMC0xODBlMWRiNGUzMmIxNCIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjQ4ODAwNzAifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%224880070%22%7D%7D; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1654914870; Hm_lpvt_156e88c022bf41570bf96e74d090ced7=1654914870; 99f53b614ce96c83_gr_session_id=ac420269-15d8-4994-b5c9-c5b011eeb5bb; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=ac420269-15d8-4994-b5c9-c5b011eeb5bb; 99f53b614ce96c83_gr_session_id_ac420269-15d8-4994-b5c9-c5b011eeb5bb=true; deviceId=0b4b3bd31a97b648237cafad02eb90b3; passportUid=4880070; ssoToken=5f63d545e30c7a72bc6be9a6e477fed9; access-edu_online=5e0e93b6722769bbe7c1b361ffb09083; kkb_edu_session=eyJpdiI6IjZiamsxbldMTXRVRWVUdGJWT2h2V3c9PSIsInZhbHVlIjoiRTFPQXZ6YSs3b3lqK0tLYnpsVFNUMVIyblRXT2gzVUc4MHlobmgxNDJHYkdHN2phMXpTN2lGNWcwNzhWYXBqQiIsIm1hYyI6ImFmOGU3ZDlmMzgzNmNiMGNlZWY3ZDQ4NTUxNjU5OGU1OTdhOTI1OWNiZjE2OGZiNTRmMTczNmQ3MGFmMGM0OTEifQ%3D%3D; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=7GqSR4qIyX5wYlx6xwP%3Af8c04df9-974c-4a2f-993b-510353bf36f5%3A773e3709-6ddf-4914-ac10-07d96ca79125; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=sYqZlgJZf4lAyUTbEhN; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=0; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1654927986966; 99f53b614ce96c83_gr_cs1=4880070'
    }
  }

  // 214010
  const courseUrl = 'https://weblearn.kaikeba.com/student/courseinfo?course_id=214010&__timestamp=1653898285046'
  // courseUrl = `https://weblearn.kaikeba.com/student/courseinfo?course_id=${course_id}&__timestamp=1653898285046`
  const chapterUrl = 'https://weblearn.kaikeba.com/student/chapterinfo?course_id=214010&chapter_id='
  // chapterUrl = `https://weblearn.kaikeba.com/student/chapterinfo?course_id=214010&chapter_id=`  
  const mediaUrl = 'https://api-vod.baoshiyun.com/vod/v1/platform/media/detail'
  // mediaUrl ='https://api-vod.baoshiyun.com/vod/v1/platform/media/detail'

  const accessToken = 'e52be4a731d744c194249f27ab6a4230'

 
  const res = await axios.get(courseUrl, config)
  const { data: { data: courseInfo } }  = res
  console.log(222222222222, res);
  const chapterList = courseInfo.chapter_list
  console.log(1111111111, chapterList);


  let allText = ''
  console.log(chapterList.length);
  for (let i = 0; i < chapterList.length; i++) {

    const chapterName = `${i + 1}、${chapterList[i].chapter_name}`
    const chapterPath = `${basePath}/${chapterName}`
    console.log(await checkPath(chapterPath))
    const url = chapterUrl + chapterList[i].chapter_id
    const { data: { data: chapterInfo } } = await axios.get(url, config)
    // console.log(chapterInfo);

    const sectionList = chapterInfo.section_list
    for (let j = 0; j < sectionList.length; j++) {

      // console.log(sectionList[0].group_list[0].content_list[0].content.length);
      const groupInfo = sectionList[j].group_list[0]
      let name = groupInfo.group_name.replace(/\//g, '-')
      const groupName = `${j + 1}、${name}`
      const groupPath = `${chapterPath}/${groupName}`
      console.log(await checkPath(groupPath))

      const contentList = groupInfo.content_list
      const fileName = groupPath + '/' + name + '.txt'
      for (let k = 0; k < contentList.length; k++) {
        // if(k) break
        const { content: contents, content_type, content_title } = contentList[k]

        if (content_type === 3 || content_type === 7) {
          // fs.rmSync(fileName)
          let contentText = ''
          for (let l = 0; l < contents.length; l++) {
            const { callback_key: mediaId } = contents[l]
            const params = { mediaId, accessToken }
            const { data: { data: videoInfo } } = await axios.get(mediaUrl, { ...config, params })
            const { playURL } = videoInfo.mediaMetaInfo.videoGroup[0]
            console.log(playURL);
            contentText += `ffmpeg -i ${playURL} -c copy -bsf:a aac_adtstoasc ./${content_title}--${l < 9 ? 0 : ''}${l + 1}.mp4\n`
            allText += `ffmpeg -i ${playURL} -c copy -bsf:a aac_adtstoasc "${path.resolve(groupPath)}/${content_title}--${l < 9 ? 0 : ''}${l + 1}.mp4"\n`
          }
          contentText += '\n'
          allText += '\n'
          fs.writeFileSync(fileName, contentText, { flag: 'a+' })
        }

        if (content_type === 6) {
          for (let l = 0; l < contents.length; l++) {
            const { name, url } = contents[l]
            const file = groupPath + '/' + name
            const writer = fs.createWriteStream(file)
            const response = await axios({ url, responseType: 'stream' })
            response.data.pipe(writer)
          }
        }
      }
    }
  }
  fs.writeFileSync('./video/allText.txt', allText)
})()