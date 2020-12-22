import React from 'react';

const Friends = (props) => {
    let name = props.fr;
    let img = props.fr;

    let newName = name.map(names => <div>{names.name}</div>)
    let newImg = img.map(imgs => <img className='avatar' src={imgs.img} alt="альтернативный текст"/>)

    let newElement = React.createRef();
    
    let addMessage = () => {
        let text = newElement.current.value;
        props.add(text)
    }

    return (
        <div>
           {newName}
            {newImg}
            <div>
            <textarea ref={newElement}></textarea>
            </div>
            <button onClick={addMessage}>Нажми</button>
        </div>
    )
}

export default Friends;