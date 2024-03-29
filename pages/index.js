import React, {useState} from 'react'

const InputElement = () => {

  const [inputText, setInputText] = useState("")
  const [historyList, setHistoryList] = useState([])

  return <div><input
    onChange={(e) => {
      setInputText(e.target.value)
      setHistoryList([...historyList,e.target.value])
    }}
    placeholder="Enter Any Text Here..."/><br />
    {inputText}
    <hr/>
    <ul>
      {historyList.map((rec) => {
        return <div>{rec}</div>
      })}
    </ul>
  </div>
}

export default InputElement
