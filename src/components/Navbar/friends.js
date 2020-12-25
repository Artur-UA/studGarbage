import React from 'react';

const Friends = (props) => {
    let name = props.fr;
    let img = props.fr;
    let work = props.newText;

    let newName = name.map(names => <div>{names.name}</div>)
    let newImg = img.map(imgs => <img className='avatar' src={imgs.img} alt="альтернативный текст"/>)

    let newElement = React.createRef();
    
    let addMessage = () => {
        let text = newElement.current.value;
        props.add(text)
        console.log(text);
    }

    let onChangeArea = (value) => {
        let text = newElement.current.value;
        work(text)

        console.log(text);
    }

    return (
        <div>
           {newName}
           <br/>
            {newImg}
            <div>
            <textarea ref={newElement}
                onChange={onChangeArea}
            />
            </div>
            <button onClick={addMessage}>Нажми</button>
        </div>
    )
}

export default Friends;