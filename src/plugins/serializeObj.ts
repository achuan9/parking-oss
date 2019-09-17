// 序列化对象
interface Obj {
  [propName: string]: any;
}

export default (obj: Obj) => {
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      arr.push(`${key}=${value}`)
    }
  }
  return arr.join('&')
}
