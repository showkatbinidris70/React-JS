import {v4 as uuidv4} from 'uuid';

const todos = [
    {
        "id": uuidv4(),
        "title": "This is title 1",
        "desc": "This is desc 1"
    },
    {
        "id": uuidv4(),
        "title": "This is title 2",
        "desc": "This is desc 2"
    },
    {
        "id": uuidv4(),
        "title": "This is title 3",
        "desc": "This is desc 3"
    }, {
        "id": uuidv4(),
        "title": "This is title 4",
        "desc": "This is desc 4"
    }
]

function UniqueIdComponent() {
    console.log(uuidv4());
    return <div>
        {todos.map((item, index) => {
            const {title, desc} = item;
            return (
                <div key={index}>
                    <h3 className="todoTitle">{title}</h3>
                    <h5 className="tododesc">{desc}</h5>
                </div>
            );
        })}
    </div>

}

export default UniqueIdComponent;